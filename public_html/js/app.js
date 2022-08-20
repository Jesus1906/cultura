/* global angular, Noty, login_url, Storage, is_app */

angular.module('app', [
    'ui.router',
    '$uhttp',
    'oc.lazyLoad'
]);
//configuracion de las notificaciones
var small_loader = new Noty({
    theme: 'metroui',
    text: '<div style="text-align:center">cargando...<i class="fa fa-cog fa-spin fa-fw"></i></div>',
    layout: 'bottomLeft',
    timeout: false,
    closeWith: []
});
var full_screen_loader = new Noty({
    theme: 'metroui',
    text: '<div style="text-align:center; padding:30px 0; ">guardando...<i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div>',
    layout: 'center',
    timeout: false,
    closeWith: [],
    modal: true
});
var process_loader = new Noty({
    theme: 'metroui',
    text: '<div style="text-align:center; padding:30px 0; ">procesando... 0%<i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div><div style="margin: 0; padding: 0; border: 1px solid #ccc; background-color: #eee; height: 10px;"><div style="margin: 0; padding: 0; border: 0; height: 100%; background-color: #18a12f; width: 0%;"></div></div>',
    layout: 'center',
    timeout: false,
    closeWith: [],
    modal: true
});
var noty_status = null;
var notyDebug = [];
//configuracion de las notificaciones
angular.module('app').config([
    '$uhttpProvider',
    function ($uhttpProvider) {
        $uhttpProvider.setNotifications({
            status_callbacks: {
                301: function (response) {
                    if (noty_status === null) {
                        var mensaje = (typeof (response.data.message) !== 'undefined') ? response.data.message : 'Contenido no disponible';
                        noty_status = new Noty({
                            theme: 'metroui',
                            type: 'warning',
                            text: '<h3>Atenci&oacute;n</h3><div style="text-align:center; padding:30px 0; "><i class="fa fa-exclamation-triangle fa-3x"></i>' + mensaje + '</div>',
                            layout: 'center',
                            timeout: false,
                            modal: true,
                            buttons: [
                                Noty.button('OK', 'btn btn-light', function ($noty) {
                                    $noty.close();
                                })
                            ],
                            callbacks: {
                                afterClose: function () {
                                    noty_status = null;
                                    // location.href = login_url;
                                }
                            }
                        }).show();
                    }
                    return false;
                },
                401: function (response) {
                    if (noty_status === null) {
                        var mensaje = (typeof (response.data.message) !== 'undefined') ? response.data.message : 'Para realizar esta acci&oacute;n, debes autenticarte.';
                        noty_status = new Noty({
                            theme: 'metroui',
                            type: 'warning',
                            text: '<h3>Atenci&oacute;n</h3><div style="text-align:center; padding:30px 0; "><i class="fa fa-exclamation-triangle fa-3x"></i> <br><br>' + mensaje + '</div>',
                            layout: 'center',
                            timeout: false,
                            modal: true,
                            buttons: [
                                Noty.button('OK', 'btn btn-light', function ($noty) {
                                    $noty.close();
                                })
                            ],
                            callbacks: {
                                afterClose: function () {
                                    noty_status = null;
                                    // location.href = login_url;
                                }
                            }
                        }).show();
                    }
                    return false;
                },
                403: function () {
                    if (noty_status === null) {
                        noty_status = new Noty({
                            theme: 'metroui',
                            type: 'warning',
                            text: '<h3>Atenci&oacute;n</h3><div style="text-align:center; padding:30px 0; "><i class="fa fa-exclamation-triangle fa-3x"></i> No tienes permisos suficientes para acceder a esta página</div>',
                            layout: 'center',
                            timeout: false,
                            modal: true,
                            buttons: [
                                Noty.button('OK', 'btn btn-light', function ($noty) {
                                    $noty.close();
                                })
                            ],
                            callbacks: {
                                afterClose: function () {
                                    noty_status = null;
                                    // location.href = login_url;
                                }
                            }
                        }).show();
                    }
                    return false;
                },
                404: function (response) {
                    if (noty_status === null) {
                        var mensaje = (typeof (response.data.message) !== 'undefined') ? response.data.message : 'Contenido no disponible';
                        noty_status = new Noty({
                            theme: 'metroui',
                            type: 'info',
                            text: '<h4 style="text-align:center; padding:30px 0;">' + mensaje + '</h4>',
                            layout: 'center',
                            timeout: false,
                            modal: true,
                            buttons: [
                                Noty.button('OK', 'btn btn-light', function ($noty) {
                                    $noty.close();
                                })
                            ],
                            callbacks: {
                                afterClose: function () {
                                    noty_status = null;
                                }
                            }
                        }).show();
                    }
                    return false;
                },
                405: function (response) {
                    if (noty_status === null) {
                        var mensaje = (typeof (response.data.error) !== 'undefined') ? response.data.error : 'Contenido no disponible';
                        new Noty({
                            theme: 'metroui',
                            text: '<h1>405</h1><h4 style="text-align:center; padding:30px 0;">' + mensaje + '</h4>' + response.config.url,
                            layout: 'center',
                            timeout: false,
                            modal: true,
                            buttons: [
                                Noty.button('OK', 'btn btn-light', function ($noty) {
                                    $noty.close();
                                })
                            ],
                            callbacks: {
                                afterClose: function () {
                                    noty_status = null;
                                }
                            }
                        }).show();
                    }
                    return false;
                }
            },
            full_screen_loader_start: function () {
                full_screen_loader.show();
            },
            full_screen_loader_done: function () {
                full_screen_loader.close();
            },
            small_loader_start: function () {
                small_loader.show();
            },
            small_loader_done: function () {
                small_loader.close();
            },
            process_loader_start: function () {
                process_loader.show();
            },
            process_loader_done: function () {
                process_loader.close();
            },
            process_loader_update: function (process) {
                var update_text = '<div style="text-align:center; padding:30px 0; ">procesando... ' + process + '%<i class="fa fa-cog fa-spin fa-3x fa-fw"></i></div>';
                update_text += '<div style="margin: 0; padding: 0; border: 1px solid #ccc; background-color: #eee; height: 10px;">';
                update_text += '<div style="margin: 0; padding: 0; border: 0; height: 100%; background-color: #18a12f; width: ' + process + '%;"></div>';
                update_text += '</div>';
                process_loader.setText(update_text);
            },
            success: function (message, time, title) {
                new Noty({
                    theme: 'metroui',
                    text: '<h4>' + title + '</h4>' + message,
                    type: 'success',
                    timeout: time
                }).show();
            },
            warning: function (message, time, title) {
                new Noty({
                    theme: 'metroui',
                    text: '<h4>' + title + '</h4>' + '<div style="max-height: 400px; overflow: auto;">' + message + '</div>',
                    type: 'warning',
                    timeout: time
                }).show();
            },
            error: function (message, time, title) {
                new Noty({
                    theme: 'metroui',
                    text: '<h4>' + title + '</h4>' + '<div style="max-height: 400px; overflow: auto;">' + message + '</div>',
                    type: 'error',
                    timeout: time
                }).show();
            },
            debug: function (message) {
                var texto = '<p style="border-bottom: #999 1px solid; paddxing-bottom: 5px;">debugging</p>';
                texto += '<div style="max-height: 400px; overflow: auto;">';
                texto += message;
                texto += '</div>';
                var noty = new Noty({
                    theme: 'metroui',
                    text: texto,
                    closeWith: [],
                    timeout: false
                }).show();
                notyDebug.push(noty);
            },
            close_debug: function () {
                while (notyDebug.length > 0) {
                    var noty = notyDebug.pop();
                    noty.close();
                }
            }
        });
    }
]);

function show_cancel_dialog(config) {
    var noty = new Noty({
        theme: 'bootstrap-v4',
        type: 'alert',
        text: '<div class="text-center mt-5 text-secondary"><p><strong>&iquest;Desea guardar los cambios?</strong></p><p class="mt-4">Si decide \'No guardar\' todos los cambios se perder&aacute;n</p></div>',
        layout: 'center',
        timeout: false,
        modal: true,
        closeWith: ['button'],
        buttons: [
            Noty.button('Guardar', 'btn btn-sm btn-outline-success', function () {
                //intentara guardar los cambios, pasando antes por la validacion del formulario
                if (typeof (config['on_save']) === 'function') {
                    config['on_save'].call(this);
                }
                noty.close();
            }),
            Noty.button('No guardar', 'btn btn-sm btn-outline-danger ml-2', function () {
                //continua sin guardar y sale del modulo
                if (typeof (config['on_leave']) === 'function') {
                    config['on_leave'].call(this);
                }
                noty.close();
            }),
            Noty.button('Cancelar', 'btn btn-sm btn-outline-secondary ml-2', function () {
                if (typeof (config['on_stay']) === 'function') {
                    config['on_stay'].call(this);
                }
                //simplemente cierra el modal
                noty.close();
            })
        ]
    }).show();
}

angular.module('app').run(function ($state) {
    $state.defaultErrorHandler(function (error) {
        console.error(error);
        new Noty({
            theme: 'metroui',
            type: 'warning',
            text: '<div class="text-center">Error al cargar un contenido, actualize la página, si el error persiste favor de contactar con nuestro equipo de soporte.</div>',
            layout: 'center',
            closeWith: [],
            modal: true
        }).show();
    });
});
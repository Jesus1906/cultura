<!DOCTYPE html>
<html lang="es-MX">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link href="<?= base_url(); ?>css/noty.css" rel="stylesheet" type="text/css" />
	<base href="<?= base_url(); ?>">
	<script type="text/javascript">
		const base_url = '<?= base_url(); ?>';
		const api_url = base_url + "index.php/api/";
	</script>
	<title>Document</title>
</head>

<body ng-app="app">
	<div class="wrapper" ui-view></div>
	<script type="text/javascript" src="<?= base_url(); ?>js/vendors/angular.min.js"></script>
	<script type="text/javascript" src="<?= base_url(); ?>js/vendors/noty.min.js"></script>
	<script type="text/javascript" src="<?= base_url(); ?>js/modules/angular-ui-router.min.js"></script>
	<script type="text/javascript" src="<?= base_url(); ?>js/modules/angular-uhttp.min.js"></script>
	<script type="text/javascript" src="<?= base_url(); ?>js/modules/ocLazyLoad.min.js"></script>
	<script type="text/javascript" src="<?= base_url(); ?>js/app.js"></script>
	<script type="text/javascript" src="<?= base_url(); ?>js/routes/routes.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>

</html>

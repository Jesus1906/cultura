<?php
defined('BASEPATH') or exit('No direct script access allowed');

use chriskacerguis\RestServer\RestController;

class Users extends RestController
{

    function __construct()
    {
        parent::__construct();
    }

    public function get_users_get()
    {
        $this->response(['message' => "Mensaje"], RestController::HTTP_OK);
    }
}

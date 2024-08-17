<?php

header('Access-Control-Allow-Origin: *');

include 'db.php';



function get_models(mysqli $con)
{
    try {
        $sql = 'SELECT * FROM models';
        $res = $con->query($sql)->fetch_all();

        echo json_encode(array('models' => $res));
    } catch (Exception $err) {
    }
}

function insert_model(mysqli $con, array $info)
{
    try {
        $name = $info[0];
        $content = $info[1];

        $exists = 0;

        $names = $con->query('SELECT name FROM models')->fetch_all();

        foreach ($names as $name_) {
            if ($name == $name_[0]) {
                $exists = 1;
            }
        }
        $sql = '';

        if ($exists) {
            $sql = "UPDATE models SET content = '$content' WHERE name = '$name'";
        } else {
            $sql = "INSERT INTO models(name,content) VALUES('$name','$content')";
        }

        $res = $con->query($sql);
        echo json_encode(array('res' => $res));
    } catch (Exception $err) {
    }
}

function delete_model(mysqli $con, array $info)
{
    try {
        $name = $info[0];

        $exists = 0;

        $names = $con->query('SELECT name FROM models')->fetch_all();

        foreach ($names as $name_) {
            if ($name == $name_[0]) {
                $exists = 1;
            }
        }
        $sql = '';
        
        $res = false;
        if ($exists) {
            $sql = "DELETE FROM models WHERE name = '$name'";
            $res = $con->query($sql);
        }
        echo json_encode(array('res' => $res));
    } catch (Exception $err) {
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $mode = $_POST['mode'];

    switch ($mode) {
        case 'insert_model':
            $name = $_POST['name'];
            $content = $_POST['content'];
            insert_model($con, array($name, $content));
            break;
        case 'delete_model':
            $name = $_POST['name'];
            delete_model($con, array($name));
            break;
        case 'get_models':
            get_models($con);
            break;
        default:
            break;
    }
}

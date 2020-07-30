<?php

use Illuminate\Support\Arr;

if(!function_exists('get_random_value')){
function get_random_value($arr){
    $value = Arr::random($arr);
    return $value;

}
    
}


?>

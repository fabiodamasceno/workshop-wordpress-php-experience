<?php

require "HelloDolly.php";

class HelloDollyTest extends PHPUnit_Framework_TestCase
{
    private $musica;

    public function setUp()
    {
        $this->musica = ["Hello, Dolly"];
    }

    public function testDeveRetornarSomenteUmaFraseDaMúsicaQuandoCharmOMetodo()
    {
        $helloDolly = new HelloDolly($this->musica);
        $resultado = $helloDolly->obterFrase();

        $this->assertEquals("Hello, Dolly", $resultado);
    }

    public function testDeveExibirFraseNaTelaQuandoChamarExibirFrase()
    {
        $template = "<p>{{letra}}</p>";
        $helloDolly = new HelloDolly($this->musica, $template);

        $this->expectOutputString("<p>Hello, Dolly</p>", $helloDolly->exibirFrase());
    }
}


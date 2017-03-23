<?php

class HelloDolly
{
	private $musica;

	public function __construct(array $musica, $template = "")
	{
		$this->musica   = $musica;
		$this->template = $template;
	}

	public function obterFrase()
	{
		$posicao = mt_rand(0, count($this->musica) - 1);
		return $this->musica[$posicao];
	}

	public function exibirFrase()
	{
		$frase = $this->obterFrase();
		echo str_replace("{{letra}}", $frase, $this->template);
	}

}
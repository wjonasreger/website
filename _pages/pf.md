---
title: P-Value Calculator
layout: splash
permalink: /pf/
classes: wide

header:
  overlay_image: /assets/images/unsplash/florian-olivo-QP-6IYWN1Rg-unsplash.jpg
  og_image: /assets/images/ayu12.png
  overlay_filter: rgba(19, 41, 75, 0.5) # same as adding an opacity of 0.5 to a black background
  caption: "Photo credit: [**Florian Olivo on Unsplash**](https://unsplash.com/photos/QP-6IYWN1Rg)"
---

<!-- ![image-left](https://i.imgur.com/Urqzfrx.png){: .align-left} -->

<!-- <figure style="width: 200px; margin: 0; margin-right: 20px;" class="align-left">
  <img src="https://i.imgur.com/Urqzfrx.png" alt="">
  <figcaption style="color: grey;">Developed @ Illinois</figcaption>
</figure> -->

<script src="{{ site.baseurl }}/assets/js/pvalue/canvas.js"></script>
<script src="{{ site.baseurl }}/assets/js/pvalue/statFunctions.js"></script>
<script src="{{ site.baseurl }}/assets/js/pvalue/pf.js"></script>

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/pvalue.css">
<!-- <link rel="stylesheet" href="{{ site.baseurl }}/assets/js/pvalue/grid1column.css"> -->

<style>
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type=number] {
    -moz-appearance:textfield;
}
</style>

<div id="wrapper">
<div class="grid-container">
<!-- <script src="navigation_menu.js" type="text/JavaScript"></script> -->

<div class="main">
<ul class="menu">
  <li><a href="{{ site.baseurl }}/pnorm/">Normal Distribution</a></li>
  <li><a href="{{ site.baseurl }}/pchisq/"><span class="greek">&chi;</span><sup>2</sup> Distribution</a></li>
  <li><a href="{{ site.baseurl }}/pt/">t Distribution</a></li>
  <li class="active">F Distribution</li>
</ul>

<br />

<h1>P-Value Calculator for F Distribution</h1>

<br />

<form name="input" action="" method="get">
<p>Degree of freedom 1 (numerator) : <input type="number" id="df1" name="df1" min="1" step="1" /> </p>

<p>Degree of freedom 2 (denominator): <input type="number" id="df2" name="df2" min="1" step="1" /> </p>

<hr />

<p>F-value: <input type="number" id="F" name="F" min="0" step="any" /> 
&nbsp; &nbsp; 
<input type="button" name="p value" value="Compute p-value" 
onClick="PfromF_F(this.form)" /></p>

<p>p-value: <input type="number" id="p-value" name="p_value" step="any" />
&nbsp; &nbsp;
<input type="button" name="F value" value="Compute F" 
onClick="FfromP_F(this.form)" /></p>

<p>p-value type: <br />
<input onchange="changePtype(this.form,1)" type="radio" id="ptype1" 
name="ptype1" value="1" checked="checked" />right tail<br />
<input onchange="changePtype(this.form,2)" type="radio" id="ptype2"
name="ptype2" value="2" />left tail</p>

</form>

<hr />

<p id="input"></p>
<p id="output"></p>
<p id="Rcommand"></p>

<br /> <br />
<canvas id="Fcurve" width="535" height="300">
  CANVAS NOT SUPPORTED IN THIS BROWSER!
</canvas>

<br /> <br />
</div>
</div>
</div>

(function () {
	function init() {
	  document.getElementById('numbsfontcolor').addEventListener('click',NumbsChangeFontColor);
	}

    function NumbsChangeFontColor () {
      for (var i = 0, p = document.getElementsByTagName('td'); i < p.length; i++) {
        p[i].style.color = 'red';
      }
    }

  document.addEventListener('DOMContentLoaded',init);
}());

(function () {
	function init() {
	  document.getElementById('numbsbgcolor').addEventListener('click',changeNumbsBackgroundColor);
	}

    function changeNumbsBackgroundColor () {
      for (var i = 0, button = document.getElementsByClassName('numbs'); i < button.length; i++) {
        button[i].style.background = 'darkgray';
      }
    }

  document.addEventListener('DOMContentLoaded',init);
}());

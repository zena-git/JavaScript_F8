
const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');

var tab = document.querySelector('.tab-item.active');
    var line = document.querySelector('.line');

    line.style.left = tab.offsetLeft + "px";
    line.style.width = tab.offsetWidth + "px";

tabs.forEach((tab, index) => {
    var pane = panes[index];
   
    tab.onclick = function () {
      
        var tabActive = document.querySelector('.tab-item.active');
        tabActive.classList.remove('active');
        var paneActive = document.querySelector('.tab-pane.active');
        paneActive.classList.remove('active');

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add('active');
        pane.classList.add('active');
    }

})




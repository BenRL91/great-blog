function LayoutController(){
  let vm = this;

  init();

  function init(){
    vm.shown = false;
  }

  vm.toggleNewsLetter = (shown) => {
    return vm.shown =  !shown
  }
}

LayoutController.$inject = [];

export { LayoutController };

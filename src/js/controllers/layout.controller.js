function LayoutController(){
  let vm = this;
  console.log("hey1")

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

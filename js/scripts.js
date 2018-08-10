var menuLeft = document.getElementById( 'cbp-spmenu-s1' ),
    showLeft = document.getElementById( 'showLeft' ),
    mainMenu = document.getElementById( 'main-menu'),
    userInfo = document.getElementById( 'user-info'),
    customerInfo = document.getElementById( 'customer-info'),
    body = document.body;

showLeft.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
  classie.toggle( customerInfo, 'active');
  classie.toggle( mainMenu, 'active');
  classie.toggle( userInfo, 'active');
};

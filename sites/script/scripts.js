function select_page( name_of_header )
{
    var x = document.getElementsByClassName( name_of_header );
    var i;

    for( i = 0; 
         i < x.length;
         i ++ )
    {
        x[i].classList.add( "selected_page" );
    }
}

// TODO: Renamed layer, another function. turns header darker. on desktop version.
function use_overlay()
{
    var x = document.getElementsByClassName('page_header_area');
    var i;

    for(i=0; i < x.length; i++)
    {
        x[i].classList.add("overlay");
    }
}

function init()
{
    
    
}

var mobile_overlay = false;

function switch_mobile_overlay_mode()
{
    mobile_overlay = !mobile_overlay;
}

// Mobile. Show's the menu
function overlay_click()
{
    var i;

    //
    if( mobile_overlay == false )
    {
        // Turn overlay state
        switch_mobile_overlay_mode();

        // Show Menu
        var x = document.getElementsByClassName('mobile_page_navigation_area');

        for( i =0; 
             i < x.length; 
             i++ )
        {
            x[i].classList.remove('hide');
        }

    }
    else 
    {
        // Turn overlay state to it's opposite
        switch_mobile_overlay_mode();

        // Remove
        // Show Menu
        var x = document.getElementsByClassName('mobile_page_navigation_area');
 
        for( i =0; 
             i < x.length; 
             i++ )
         {
             x[i].classList.add('hide');
         }

    }
}
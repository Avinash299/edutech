import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";
import $ from 'jquery'; 
import 'bootstrap';
class  Sidebar extends React.Component {
      constructor(props) {
          super(props);
      }
     
     componentDidMount( ){
        $('#body-row .collapse').collapse('hide'); 

        $('#collapse-icon').addClass('fa-angle-double-left'); 
        
        $('[data-toggle=sidebar-colapse]').click(function() {
            $('.menu-collapsed').toggleClass('d-none');
            $('.sidebar-submenu').toggleClass('d-none');
            $('.submenu-icon').toggleClass('d-none');
            $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
            
            // Treating d-flex/d-none on separators with title
            var SeparatorTitle = $('.sidebar-separator-title');
            if ( SeparatorTitle.hasClass('d-flex') ) {
                SeparatorTitle.removeClass('d-flex');
            } else {
                SeparatorTitle.addClass('d-flex');
            }
            
            // Collapse/Expand icon
            $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
        });
     }
    
     SidebarCollapse () {
        $('.menu-collapsed').toggleClass('d-none');
        $('.sidebar-submenu').toggleClass('d-none');
        $('.submenu-icon').toggleClass('d-none');
        $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
        
        // Treating d-flex/d-none on separators with title
        var SeparatorTitle = $('.sidebar-separator-title');
        if ( SeparatorTitle.hasClass('d-flex') ) {
            SeparatorTitle.removeClass('d-flex');
        } else {
            SeparatorTitle.addClass('d-flex');
        }
        
        // Collapse/Expand icon
        $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
    }
    render(){
    return(
        <div className="row" id="body-row">
            <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">
                <ul className="list-group">
                    
                    <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-start align-items-center">
                            <span className="fa fa-dashboard fa-fw mr-3"></span> 
                            <span className="menu-collapsed">Dashboard</span>
                            <span className="submenu-icon ml-auto"></span>
                        </div>
                    </a>
                    <div id='submenu1' className="collapse sidebar-submenu">
                        <a href="#" className="list-group-item list-group-item-action bg-dark text-white">
                        <Link to="/users">Users</Link>
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    );
    }
}

export default Sidebar;



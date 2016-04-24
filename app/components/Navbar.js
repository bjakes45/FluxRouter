import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
    NavbarActions.getItemCount();

    let socket = io.connect();

    socket.on('onlineUsers', (data) => {
      NavbarActions.updateOnlineUsers(data);
    });

    $(document).ajaxStart(() => {
      NavbarActions.updateAjaxAnimation('fadeIn');
    });

    $(document).ajaxComplete(() => {
      setTimeout(() => {
        NavbarActions.updateAjaxAnimation('fadeOut');
      }, 750);
    });
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    let searchQuery = this.state.searchQuery.trim();

    if (searchQuery) {
      NavbarActions.findItem({
        searchQuery: searchQuery,
        searchForm: this.refs.searchForm,
        history: this.props.history
      });
    }
  }

  render() {
    var user = user
  	var hideHost = this.props.hideHost ? 'hidden':'dropdown';
  	var hideMod = this.props.hideMod ? 'hidden':'dropdown';
  	var hideMgmt = this.props.hideMgmt ? 'hidden':'dropdown';
  	
    return (
      <nav className='navbar navbar-inverse navbar-fixed-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            <span ref='triangles' className={'triangles animated ' + this.state.ajaxAnimationClass}>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
              <div className='tri'></div>
              <div className='tri invert'></div>
            </span>
            <span className="pull-left">
            <image className="img-responsive logo" src="./img/smlogo.png" width='40px'/>
            </span>
            <span className='badge badge-up badge-danger'>{this.state.onlineUsers}</span>
          </Link>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <form ref='searchForm' className='navbar-form navbar-left animated' onSubmit={this.handleSubmit.bind(this)}>
            <div className='input-group'>
              <span className='input-group-btn'>
                <button className='btn btn-default' data-toggle="modal" data-target="#myModal"><span className='glyphicon glyphicon-barcode'></span></button>
              </span>
              <input type='text' className='form-control' placeholder={this.state.totalItems + ' Items'} value={this.state.searchQuery} onChange={NavbarActions.updateSearchQuery} />
              <span className='input-group-btn'>
                <button className='btn btn-default' onClick={this.handleSubmit.bind(this)}><span className='glyphicon glyphicon-search'></span></button>
              </span>
            </div>
          </form>
          <ul className='nav navbar-nav'>
            <li className='dropdown'>
              	<a href='#' className='dropdown-toggle' data-toggle='dropdown'>Cupboard<span className='caret'></span></a>
              	<ul className='dropdown-menu'>
                	<li><Link to='/favs'>Favourites</Link></li>
                	<li><Link to='/msg'>Messages</Link></li>
                	<li><Link to='/dc'>Deal Center</Link></li>
                </ul>
            </li>
            <li className='dropdown'>
              	<a href='#' className='dropdown-toggle' data-toggle='dropdown'>Library<span className='caret'></span></a>
              	<ul className='dropdown-menu'>
                	<li><Link to='/items'>Items</Link></li>
                	<li><Link to='/comps'>Companies</Link></li>

                </ul>
            </li>
            <li className={hideHost}>
              	<a href='#' className='dropdown-toggle' data-toggle='dropdown'>Hosting<span className='caret'></span></a>
              	<ul className='dropdown-menu'>
                	<li><Link to='/addit'>Add New Item</Link></li>
                	<li><Link to='/dealmgr'>Manage Deals</Link></li>
                	<li><Link to='/credmark'>Cred Market</Link></li>
                </ul>
            </li>
            <li className={hideMod}>
              	<a href='#' className='dropdown-toggle' data-toggle='dropdown'>Moderator<span className='caret'></span></a>
              	<ul className='dropdown-menu'>
                	<li><Link to='/brand'>Upload Content</Link></li>
                	<li><Link to='/propose'>Product Proposals</Link></li>
                	<li><Link to='/subscribe'>Manage Subscription</Link></li>
                </ul>
            </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li className={hideMgmt}>
              	<a href='#' className='dropdown-toggle' data-toggle='dropdown'>Manage Site<span className='caret'></span></a>
              	<ul className='dropdown-menu'>
                	<li><Link to='/mgrlib'>Edit Library</Link></li>
                	<li><Link to='/mgrcomps'>Company Certifications</Link></li>
                	<li><Link to='/mgrcred'>Cred Ledger</Link></li>
                </ul>
            </li>
            <li className='dropdown'>
              	<a href='#' className='dropdown-toggle' data-toggle='dropdown'>Username<span className='caret'></span></a>
              	<ul className='dropdown-menu'>
                	<li><Link to='/profile'>Profile</Link></li>
                	<li><Link to='/newhost'>Become a Host</Link></li>
                	<li><Link to='/login'>Logout</Link></li>
                </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
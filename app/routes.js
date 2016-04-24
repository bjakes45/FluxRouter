import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Favourites from './components/Favourites';
import MsgPage from './components/MsgPage';
import Inbox from './components/Inbox';
import NewMsg from './components/NewMsg';
import DealCenter from './components/DealCenter';
import Library from './components/Library';
import PLULib from './components/PLULib';
import CompanyLib from './components/CompanyLib';
import Matches from './components/Matches';
import AddItem from './components/AddItem';
import DealMgr from './components/DealMgr';
import DlMgrActive from './components/DlMgrActive';
import CredMark from './components/CredMark';
import Profile from './components/Profile';
import ProfHome from './components/ProfHome';
import NewHost from './components/NewHost';
import ContactPage from './components/ContactPage';
import FAQ from './components/FAQ';
import AboutUs from './components/AboutUs';
import ItemPage from './components/ItemPage';
import BizPage from './components/BizPage';
import HostPage from './components/HostPage';

export default (
	<Route>
		<Route component={App} >
	    	<Route path='/' component={Home} />
	    	<Route path='/logout' component={Logout} />
	    	<Route path='/favs' component={Favourites} />
	    	<Route component={MsgPage}>
	    		<Route path='/msg' component={Inbox}/>
	    		<Route path='/newmsg' component={NewMsg}/>
	    	</Route>
	    	<Route path='/dc' component={DealCenter} />
	    	<Route path='/items' component={Library} />
	    	<Route path='/plu' component={PLULib} />
	    	<Route path='/comps' component={CompanyLib} />
	    	<Route path='/match' component={Matches} />
	    	<Route path='/addit' component={AddItem} />
	    	<Route component={DealMgr}>
	    		<Route path='/dealmgr' component={DlMgrActive} />
	    	</Route>
	    	<Route path='/credmark' component={CredMark} />
	    	<Route path='/brand' component={CredMark} />
	    	<Route path='/propose' component={CredMark} />
	    	<Route path='/subscribe' component={CredMark} />
	    	<Route path='/mgrlib' component={CredMark} />
	    	<Route path='/mgrcomps' component={CredMark} />
	    	<Route path='/mgrcred' component={CredMark} />
	    	<Route component={Profile} >
	    		<Route path='/profile' component={ProfHome} />
		    	<Route path='/newhost' component={NewHost} />
	    	</Route>
	    	<Route path='/itempg/:id' component={ItemPage} />
	    	<Route path='/bizpg/:id' component={BizPage} />
	    	<Route path='/hostpg/:id' component={HostPage} />

	    	<Route path='/contact' component={ContactPage} />
	    	<Route path='/faq' component={FAQ} />
	    	<Route path='/about' component={AboutUs} />
	  	</Route>
		<Route path='/login' component={Login} />
	</Route>
);
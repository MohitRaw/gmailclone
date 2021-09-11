import React from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "./features/userSlice";
import {logout} from "./features/userSlice";
import {auth} from "./Firebase";

const Header = () => {
	const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const signOut = () => {
        auth.signOut().then(()=> {
            dispatch(logout());
        })

    };

	return (
		<div className="header">
			<div className="header__left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img 
					src="https://u01.appmifile.com/images/2019/05/25/65d91020-cff7-4ccd-b469-e5a5296e2e55.jpg" alt="gmail icon" />

			</div>

			<div className="header__middle">
				<SearchIcon />
				<input type="text" placeholder="search mail" />
				<ArrowDropDownIcon className="header__inputCaret" />
			</div>

			<div className="header__right">

				<IconButton>
					<HelpOutlineOutlinedIcon />
				</IconButton>

				<IconButton>
					<SettingsOutlinedIcon />
				</IconButton>

				<IconButton>
                  <AppsIcon />
              	</IconButton>

             	<IconButton>
                  <NotificationsIcon />
              	</IconButton>

              	<Avatar onClick={signOut} src={user?.photoURL}/>
			</div>
		</div>
	);
}

export default Header;
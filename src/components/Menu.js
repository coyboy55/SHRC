import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useHistory } from 'react-router-dom';
import { Button, FormLabel } from '@material-ui/core';
import { Settings } from '@material-ui/icons';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
let patientID=props.patientID;
  let history=useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <li className="sidebarListItem"  onClick={handleClick} >
       <Settings  className="sidebarIcons"/>MANAGE
      {/* <Button 
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      > */}
        {/* MANAGE */}

      {/* </Button>  */}
      <Menu onBlur={handleClose}
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
     
          <MenuItem  onClick={()=>history.push(`/doctor`)}>
          DOCTOR
          </MenuItem>
          <MenuItem  onClick={()=>history.push(`/affectedlimb`)}>
        AFFECTED LIMB
          </MenuItem>

          <MenuItem  onClick={()=>history.push(`/smoking`)}>
        SMOKING
          </MenuItem>

          <MenuItem  onClick={()=>history.push(`/testtype`)}>
        TEST TYPE
          </MenuItem>

              <MenuItem  onClick={()=>history.push(`/tool`)}>
    TOOL
          </MenuItem>   
           <MenuItem  onClick={()=>history.push(`tx`)}>
       TRAITMENT (TX)
          </MenuItem>
          <MenuItem  onClick={()=>history.push(`/diagnosis`)}>
      DIAGNOSIS
          </MenuItem>
 
      </Menu>
    </li>
  );
}

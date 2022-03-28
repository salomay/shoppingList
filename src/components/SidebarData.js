import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons  from "react-icons/md";
import * as GrIcons  from "react-icons/gr";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Room',
    path: '/room',
    icon: <MdIcons.MdMeetingRoom />,
    cName: 'nav-text'
  },
  {
    title: 'Catalogue',
    path: '/catalogue',
    icon: <FaIcons.FaChair />,
    cName: 'nav-text'
  },
  {
    title: 'Project',
    path: '/project',
    icon: <MdIcons.MdEngineering />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    path: '/users',
    icon: <FaIcons.FaUserCog />,
    cName: 'nav-text'
  },
  {
    title: 'Report',
    path: '/report',
    icon: <IoIcons.IoMdDocument />,
    cName: 'nav-text'
  }
];
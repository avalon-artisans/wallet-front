import React, { useState } from 'react';
import {
  Navbar,
  Typography,
  Drawer,
  List,
  ListItem, ListItemPrefix
} from '@material-tailwind/react';
import {
  Bars3Icon,
  UserCircleIcon,
  PresentationChartBarIcon
} from '@heroicons/react/24/solid';

/**
 * ApplicationLayout component
 * @author Kenneth Sumang
 */
export default function ApplicationLayout({ children }: React.PropsWithChildren) {
  const [ isDrawerOpen, setDrawerOpen ] = useState(false);

  return (
    <>
      <Navbar
        color="blue"
        fullWidth={true}
        className="rounded-none mx-auto px-6 py-3"
      >
        <div className="flex flex-row justify-items-center">
          <Bars3Icon
            className="h-7"
            onClick={() => setDrawerOpen(true)}
          />
          <Typography
            variant="lead"
            className="ml-5"
          >
            Todo App
          </Typography>
        </div>
      </Navbar>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}>
        <div className="flex flex-row mt-5 mb-5">
          <div className="mx-5 flex flex-row">
            <UserCircleIcon className="h-12" />
            <div className="flex flex-col justify-items-center ml-3">
              <span>Example User</span>
              <small>admin@example.com</small>
            </div>
          </div>
        </div>
        <hr />
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </List>
      </Drawer>
      <div className="m-5">
        { children }
      </div>
    </>
  );
}
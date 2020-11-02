import { Box, ClickAwayListener, Collapse, Grow, IconButton, List, ListItem, ListItemText, makeStyles, Paper, Popper, Tooltip, SvgIcon, Theme } from '@material-ui/core';
import React, { ReactElement } from 'react'
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined'
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CakeOutlinedIcon from '@material-ui/icons/CakeOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import NoteOutlinedIcon from '@material-ui/icons/NoteOutlined';
import SpaOutlinedIcon  from '@material-ui/icons/SpaOutlined';
import DiscordLogo from '../assets/Discord-Logo-Black.svg';

interface Props {

}
export type ExpandStatus = '' | 'Apps' | 'Platform'

const useStyles = makeStyles((theme : Theme) => ({
    button: {
      padding: theme.spacing(2),
    },
    menu: {
        padding: theme.spacing(2),
        maxWidth: '13em',
        textAlign: 'center'
    }
  }));
export default function Apps({ }: Props): ReactElement {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const [expanded, setExpanded] = React.useState<ExpandStatus>('Apps');

    const handleExpand = (group: ExpandStatus) => {
        setExpanded(expanded === group ? '' : group);
    };
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };


    return (
        <div>
            <IconButton
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                className={classes.button}
                onClick={handleToggle}>
                <AppsOutlinedIcon />
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
                    >
                        <Paper className={classes.menu}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <Box>
                                    <ListItem button onClick={() => handleExpand('Apps')}>
                                        <ListItemText primary="Apps" />
                                        {expanded === 'Apps' ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={expanded === 'Apps'} timeout="auto" >
                                        <List component="div" disablePadding>
                                            <Tooltip title="Bot">
                                                <IconButton aria-controls="fade-menu" aria-haspopup="true">
                                                    <ChatBubbleOutlineOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Fun">
                                                <IconButton aria-controls="fade-menu" aria-haspopup="true">
                                                    <CakeOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Game">
                                                <IconButton aria-controls="fade-menu" aria-haspopup="true">
                                                    <SportsEsportsOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Karma">
                                                <IconButton aria-controls="fade-menu" aria-haspopup="true">
                                                    <SpaOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Notification">
                                                <IconButton aria-controls="fade-menu" aria-haspopup="true">
                                                    <NotificationsNoneOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Template">
                                                <IconButton aria-controls="fade-menu" aria-haspopup="true">
                                                    <NoteOutlinedIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </List>
                                    </Collapse>
                                    <ListItem button onClick={() => handleExpand('Platform')}>
                                        <ListItemText primary="Platforms" />
                                        {expanded === 'Platform' ? <ExpandLess /> : <ExpandMore />}
                                    </ListItem>
                                    <Collapse in={expanded === 'Platform'} timeout="auto" >
                                        <List component="div" disablePadding>
                                            <Tooltip title="Discord">
                                                <IconButton aria-controls="fade-menu" aria-haspopup="true">
                                                    <SvgIcon component={DiscordLogo} viewBox="0 0 245 240" />
                                                </IconButton>
                                            </Tooltip>
                                        </List>
                                    </Collapse>
                                </Box>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

import React from 'react';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import PriorityButton from './PropertiesButtons/PriorityButton';
import TagsButton from './PropertiesButtons/TagsButton';
import DueDatesButton from './PropertiesButtons/DueDatesButton';
import styles from './TaskDialog.module.css';
import themeColors from '../../../utils/contexts/themeContext';

const iconStyles = {
  color: '#8a8d91',
  width: '34px',
  height: '34px',
  border: '1px dashed #d5d6d7',
  borderRadius: '50%',
  padding: '5px',
  margin: '0 5px',
}

const elementStyles = {
  color: themeColors.textColor,
  background: themeColors.background
}

function CreateTaskDialog({ open, closeDialog, handleCreateTask, inList = 'List 1', forWorkspace = 'Workspace 1' }) {
  return (
    <Dialog
      open={open}
      onBackdropClick={closeDialog}
      sx={{
        '& .MuiDialog-paper': {
          width: '580px',
          height: '510px',
          position: 'absolute',
          bottom: '0px',
          right: '0px',
          background: themeColors.background,
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
        },
      }}
    >
      <div className={styles.topBar}>
        <input placeholder='Task name' style={elementStyles} />
        <CloseIcon
          sx={{ fill: themeColors.textBoldColor, width: '32px', height: '32px' }}
          onClick={closeDialog}
        />
      </div>

      <div className={styles.parentInfoBar}>
        <label>In</label>
        <div className={styles.forList} style={elementStyles}>{inList}</div>

        <label>For</label>
        <div className={styles.forWorkspace} style={elementStyles}>{forWorkspace}</div>
      </div>

      <textarea className={styles.descriptionInput} style={elementStyles} />

      <div className={styles.bottomBar}>
        <div className={styles.propertiesBar}>
          <PriorityButton />
          <DueDatesButton />
          <TagsButton />
        </div>
        <button className={styles.button} style={{ background: themeColors.accentColor, color: themeColors.textColor }} onClick={handleCreateTask}>Create Task</button>
      </div>

    </Dialog>
  );
}

export default React.forwardRef(CreateTaskDialog);

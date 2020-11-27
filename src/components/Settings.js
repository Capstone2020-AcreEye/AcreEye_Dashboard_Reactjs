import React ,{ useState } from "react";
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane'



const Settings = () => {
  let settings = {
    'mysettings.general.max-wind': '10',
    'mysettings.general.drone-mode': 'automatic',
    'mysettings.general.moisture-threshold': 'dstuecken@react-settings-pane.com',
    'mysettings.general.picture': 'earth',
    'mysettings.profile.firstname': 'Dennis',
    'mysettings.profile.lastname': 'Stücken',
  };

  // Define your menu
  const menu = [
    {
      title: 'Settings',          // Title that is displayed as text in the menu
      url: '/settings/general'  // Identifier (url-slug)
    },
    {

    }
  ];

  // Define one of your Settings pages
  const dynamicOptionsForProfilePage = [
    {
      key: 'mysettings.general.email',
      label: 'E-Mail address',
      type: 'text',
    },
    {
      key: 'mysettings.general.password',
      label: 'Password',
      type: 'password',
    }
  ];

  // Save settings after close
  const leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
    // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

    if (wasSaved && newSettings !== oldSettings) {
      // do something with the settings, e.g. save via ajax.
    }
  };

    return (
      <SettingsPane items={menu} index="/settings/general" settings={settings} onPaneLeave={leavePaneHandler}>

           <SettingsContent closeButtonClass="secondary" saveButtonClass="primary" header={true}>
             <SettingsPage handler="/settings/general">

      <fieldset className="form-group">
        <label for="max-wind">Maximum Wind for Flight in m/s: </label>
        <input type="text" className="form-control" name="mysetting.general.name" placeholder="10 m/s" id="general.ame"  defaultValue={settings['mysetting.general.name']} />
      </fieldset>

             <fieldset className="form-group">
               <label for="drone-mode">Flight Mode: </label>
               <select name="mysetting.general.drone-mode" id="drone-mode" className="form-control" defaultValue={settings['mysettings.mode']}>
                 <option value="automatic">Automatic</option>
                 <option value="manual">Manual</option>
               </select>
<br/>
               <fieldset className="form-group">
                 <label for="moisture-threshold">Moisture Threshold </label>
                 <select name="mysetting.general.moisture-threshold" id="moisture-threshold" className="form-control" defaultValue={settings['mysettings.mode']}>
                   <option value="ten">0-10%</option>
                   <option value="twenty">11-20%</option>
                   <option value="thirty">21-30%</option>
                   <option value="fourty">31-40%</option>
                   <option value="fifty">41-50%</option>
                   <option value="sixty">51-60%</option>
                   <option value="seventy">61-70%</option>
                   <option value="eighty">71-80%</option>
                   <option value="ninety">81-90%</option>
                   <option value="hundred">91-100%</option>
                 </select>
                 </fieldset>
                 <p>*Notification will be sent once threshold is met</p>

             </fieldset>

             </SettingsPage>
      </SettingsContent>
    </SettingsPane>


   )
}

export default Settings

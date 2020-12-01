import React, { useState } from "react";
import { profilePane, profilePage, profileContent, profileMenu } from 'react-profile-pane'



const Profile = () => {
  let profile = {
    'myprofile.general.max-wind': '10',
    'myprofile.general.drone-mode': 'automatic',
    'myprofile.general.moisture-threshold': 'dstuecken@react-profile-pane.com',
    'myprofile.general.picture': 'earth',
    'myprofile.profile.firstname': 'Dennis',
    'myprofile.profile.lastname': 'Stücken',
  };

  // Define your menu
  const menu = [
    {
      title: 'profile',          // Title that is displayed as text in the menu
      url: '/profile/general'  // Identifier (url-slug)
    },
    {

    }
  ];

  // Define one of your profile pages
  const dynamicOptionsForProfilePage = [
    {
      key: 'myprofile.general.email',
      label: 'E-Mail address',
      type: 'text',
    },
    {
      key: 'myprofile.general.password',
      label: 'Password',
      type: 'password',
    }
  ];

  // Save profile after close
  const leavePaneHandler = (wasSaved, newprofile, oldprofile) => {
    // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

    if (wasSaved && newprofile !== oldprofile) {
      // do something with the profile, e.g. save via ajax.
    }
  };

  return (
    <profilePane items={menu} index="/profile/general" profile={profile} onPaneLeave={leavePaneHandler}>

      <profileContent closeButtonClass="secondary" saveButtonClass="primary" header={true}>
        <profilePage handler="/profile/general">

          <fieldset className="form-group">
            <label for="max-wind">Maximum Wind for Flight in m/s: </label>
            <input type="text" className="form-control" name="mysetting.general.name" placeholder="10 m/s" id="general.ame" defaultValue={profile['mysetting.general.name']} />
          </fieldset>

          <fieldset className="form-group">
            <label for="drone-mode">Flight Mode: </label>
            <select name="mysetting.general.drone-mode" id="drone-mode" className="form-control" defaultValue={profile['myprofile.mode']}>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
            <br />
            <fieldset className="form-group">
              <label for="moisture-threshold">Moisture Threshold </label>
              <select name="mysetting.general.moisture-threshold" id="moisture-threshold" className="form-control" defaultValue={profile['myprofile.mode']}>
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

        </profilePage>
      </profileContent>
    </profilePane>


  )
}

export default Profile

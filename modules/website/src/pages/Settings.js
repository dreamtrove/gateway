import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import NavigationMenu from 'NavigationMenu'
import { globals } from '@gatewaycash/utils'
import axios from 'axios'
import join from 'url-join'

export default () => {
  let [username, setUsername] = useState('loading...')

  useEffect(() => {
    axios.get(join(globals.GATEWAY_BACKEND, 'getusername')).then((d) => {
      setUsername(d.name || 'No username set')
    })
  })

  return (
    <div className="container">
      <NavigationMenu page="Settings" />
      <div className="leftPanel">
        <Paper className="paper">
          <h2>Display Currency</h2>
          <p>
            Bitcoin Cash (BCH) units will always be displayed. In places like
            the View Payments page, you can choose to have values converted and
            displayed in other currencies as well. When viewing payments, you
            will be shown the current monitary value as well as what the value
            was at the time the payment was made.
          </p>
          <p>(unimplemented)</p>
        </Paper>
      </div>
      <div class="rightPanel">
        <Paper className="paper">
          <h2>Username</h2>
          <p>
            Your username can be used as a more convenient way to log into
            gateway.cash instead of using your address each time.
          </p>
          <h3>Your current username: {username}</h3>
          <p>
            When you reserve your username, there are some restrictions which
            allow for an easier login experience for all merchants.
          </p>
          <p>
            Your username must:
            <ul>
              <li>Be at least 10 characters long</li>
              <li>Not begin with another username</li>
              <li>
                Not contain special characters {'({[<\'"\\,!@#|$%^./"\'>]})'}
              </li>
              <li>Not contain spaces, tabs or return characters</li>
              <li>Not be equal to another person's address</li>
            </ul>
          </p>
          <h3>Change Username</h3>
          <TextField
            style={{
              width: '100%',
            }}
            id="usernameChange"
            label="Change Username"
            maxLength={25}
            value={this.state.usernameChangeText}
          />
          <br />
          <br />
          <center>
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleUsernameChange}
            >
              Update Username (unimplemented)
            </Button>
          </center>
        </Paper>
      </div>
      <div class="leftPanel">
        <Paper className="paper">
          <h2>Supporting the Project</h2>
          <p>
            If you'd like to support the project and help fund my college
            education, you can choose to donate a portion of each payment made
            to your merchant account. This will always be off by default, but
            any support you're able to provide is much appreciated.
          </p>
          <p>(unimplemented)</p>
        </Paper>
      </div>
    </div>
  )
}

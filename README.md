<img width = "600" src = https://github.com/GitHub1029384756/PresenterVR/blob/main/client/src/media/logo-img-alt.png></img>

<h1>Running PresenterVR</h1>
<ol>
  <li>Install Node.js (https://nodejs.org/en/)</li>
  <li>Open terminal and navigate to PrsenterVR folder (this will contain all the same data as the repo)</li>
  <li>Run node server.js in terminal</li>
  <li>Enter the browser and navigate to https://localhost:3000 <b>(READ NOTES BELOW CONCERNING HTTPS ON LOCALHOST)</b></li>
</ol>

<h1>PresenterVR Test Credentials</h1>
<ul>
  <li>Username: <b>gLEXErMY</b>, Password: <b>Zs4D)HMcgv&+</b>, Note: Used as demonstration of good password policy in user manual</li>
  <li>Username: <b>rEncenCo</b>, Password: <b>2rE2c6V#M5$!</b>, Note: Used as demonstration of good password policy in user manual</li>
  <li>Username: <b>OdGatIat</b>, Password: <b>3XHu9SMTP^bA</b>, Note: Used as demonstration of good password policy in user manual</li>
  <li>Username: <b>testUsername</b>, Password: <b>testPassword</b>, Note: Used for convience when testing the website</li>

</ul>

<h1>PresenterVR Paths</h1>
<table>
  <tr>
    <th>Path</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>'/'</th>
    <td>Landing page</th>
  </tr>
  <tr>
    <td>'/#home'</th>
    <td>Header section</th>
  </tr>
  <tr>
    <td>'/#about'</th>
    <td>About section</th>
  </tr>
  <tr>
    <td>'/#started'</th>
    <td>Getting started section</th>
  </tr>
  <tr>
    <td>'/#technology'</th>
    <td>Technologies used section</th>
  </tr> 
  <tr>
    <td>'/register'</td>
    <td>Register page</td>
  </tr>
  <tr>
    <td>'/login'</td>
    <td>Login page</td>
  </tr>
  <tr>
    <td>'/create'</td>
    <td>Create a session page</td>
  </tr>
  <tr>
    <td>'/join'</td>
    <td>Join a session page</td>
  </tr>
  <tr>
    <td>'/support'</td>
    <td>Support page</td>
  </tr>
  <tr>
    <td>'/support'</td>
    <td>Support page</td>
  </tr>
</table>

<h1>PresenterVR API</h1>
<table>
  <tr>
    <th>Type</th>
    <th>Path</th>
    <th>Parameters</th>
    <th>Resonse</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>'/login/auth'</td>
    <td>Username, Password</td>
    <td>status-code: 200 (valid credentials) | status-code: 422 (credentials undefined) | status-code: 404 (user not found) | status-code: 401 (invalid password)</td>
  </tr>
  <tr>
    <td>POST</td>
    <td>'register/auth'</td>
    <td>Username, Password</td>
    <td>status-code: 200 (valid credentials) | status-code: 422 (invalid credentials) | status-code: 409 (user already exists) </td>
  </tr>
</table>

<h1>PresenterVR Notes</h1>
<p>HTTPS may not work out the box for localhost. If you click to proceed unsafe the website should still run, alternatively follow steps 6-12 from the following link to set-up HTTPS for localhost https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node/49784278#49784278</p>



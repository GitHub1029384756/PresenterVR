<img width = "600" src = https://github.com/GitHub1029384756/PresenterVR/blob/main/client/src/media/logo-img-alt.png></img>

<h1>Running PresenterVR</h1>
<ol>
  <li>Install Node.js (https://nodejs.org/en/)</li>
  <li>Open terminal and navigate to PrsenterVR folder (this will contain all the same data as the repo)</li>
  <li>Run node server.js in terminal</li>
  <li>Enter the browser and navigate to https://localhost:3000 <b>(READ NOTES BELOW CONCERNING HTTPS ON LOCALHOST)</b></li>
</ol>

<h1>PresenterVR Paths</h1>
<ul>
  <li>Register page → '/register'</li>
  <li>Login page → '/login'</li>   
  <li>Create a session page → '/create'</li>
  <li>Join a session page → '/join'</li>
  <li>Support page → '/support'</li>
  <li>Landing page → '/'</li>
  <ul>
    <li>Header section → '/#home'</li>
    <li>About section → '/#about'</li>
    <li>Getting started section → '/#started'</li>
    <li>Technologies used sectino → '/#technology'</li>
  </ul>
</ul>

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
  <th>
</table>

<h1>PresenterVR Notes</h1>
<p>HTTPS may not work out the box for localhost. If you click to proceed unsafe the website should still run, alternatively follow steps 6-12 from the following link to set-up HTTPS for localhost https://stackoverflow.com/questions/21397809/create-a-trusted-self-signed-ssl-cert-for-localhost-for-use-with-express-node/49784278#49784278</p>



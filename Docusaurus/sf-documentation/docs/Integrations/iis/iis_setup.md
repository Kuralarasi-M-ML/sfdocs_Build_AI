 

# IIS Web Server and Access Logging Setup

### IIS Server Setup

1.  Open Server Manager from Start menu.

![img](\img\iis\iis_1.png)


2. Select "Add roles and features" on Server Manager Dashboard.

![img](\img\iis\iis_2.png)


3. A wizard will open, click on next.

![img](\img\iis\iis_3.png)


4. Click on next.

![img](\img\iis\iis_4.png)


5. Again, click on next.

![img](\img\iis\iis_5.png)

 
6. Select "Web Server(IIS)" in Server Roles.
 
![img](\img\iis\iis_6.png)

7. Click on "Add Features"

![img](\img\iis\iis_7.png)

 
8. Click on next.

![img](\img\iis\iis_8.png)


9. Click on next.

![img](\img\iis\iis_9.png)


10. In Role Services, select all features under "Common HTTP features", "Health and Diagnostics" and "Performance". 

 ![img](\img\iis\iis_10.png)


11. Install.

![img](\img\iis\iis_11.png)


12. Wait for installation to complete.

![img](\img\iis\iis_12.png)


13. After Installation, close the wizard.

![img](\img\iis\iis_13.png)


14. Navigate to Server Manager Dashboard, IIS Web Server is installed and can be seen in the left pane.
 
![img](\img\iis\iis_14.png)

### Starting Performance Counters

1. Click on IIS. Your server will be listed under "SERVERS".

![img](\img\iis\iis_15.png)

 
2. Right click on your server, and select "Start Performance Counters".
 
![img](\img\iis\iis_16.png)

### IIS Access Logging Setup

1. Right click on your server, and select "Internet Information Services(IIS)".

![img](\img\iis\iis_17.png)

 
2. Navigate to your web site in left pane, and select it.

![img](\img\iis\iis_18.png)


3. Double click on "Logging" Option.

![img](\img\iis\iis_19.png)

 
4. Click on "Select Fields…".
 
![img](\img\iis\iis_20.png)


5. Select all fields.

![img](\img\iis\iis_21.png)

 
6. After selecting all fields, click on "Ok".

![img](\img\iis\iis_22.png)


7. Click on "Apply" in the right pane under "Actions".

![img](\img\iis\iis_23.png)

 

IIS Web server setup is complete with access logging.

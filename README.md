<img class="huddly-logo" width="200px" height="auto" src="http://developer.huddly.com/assets/imgs/huddly.png" />

# Huddly Software Development Kit (SDK) Interfaces
This repository contains interfaces for the [Huddly SDK](https://github.com/Huddly/sdk)

>[!IMPORTANT]  
>
><b>No longer in active developement.</b> We strongly recommend using the [.NET-SDK](https://developer.huddly.com/) going forward.
></br>
></br>
In an effort to meet future demand for how we interact and communicate with our USB devices, we are modernizing our software development kit (SDK). Part of this process is switching over to the .NET framework. The new SDK has the capability to communicate with a proxy service that we run on Windows hosts. The purpose of this proxy service is to bypass a limitation where only one client can communicate with a usb device at any given time. This makes it possible for ours and anyone else's software to communicate with our devices in parallel, without the software clients getting in the way of each other. This services is gradually rolling out on all Windows systems using cameras connected through the Huddly USB Adapter. 
></br>
></br>
By the end of the year (2024) the USB proxy will be installed on all Windows systems using a Huddly IQ or camera connected through the Huddly USB Adapter. Using the JS-SDK to integrate with IQ or Huddly USB Adapter connected cameras will no longer be possible on these hosts.

## Getting started
Please refer to [Huddly SDK repository](https://github.com/Huddly/sdk) and the [Huddly SDK documentation](https://developer.huddly.com/).
## Issues
If you have a question or found a bug please [open an issue](https://github.com/Huddly/sdk-interfaces/issues). Thank you

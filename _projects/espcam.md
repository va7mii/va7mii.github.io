---
layout: page
title: Object Detection Using ESP-Cam
description: Sending ESP-32 video to laptop to run YOLO models.
img: assets/img/projects/espcam/espcam-cover.png
importance: 4
mermaid:
  enabled: true
  zoomable: true
---

Source code: <https://github.com/va7mii/BeachBot-IGEN230>


## Robot Setup

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid loading="eager" path="assets/img/projects/espcam/robot-top.png" title="Top view" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Physical design of the robot used for ESP-32 cam. Its designed to detect and collect street waste.
</div>

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid loading="eager" path="assets/img/projects/espcam/schematic.png" title="Top view" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Wiring setup of ESP32, camera, motors, and battery.
</div>

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid loading="eager" path="assets/img/projects/espcam/inference.png" title="Top view" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
    Object detection using ESP32-Cam's video data. 640 x 480 resolution. 
</div>

## WiFi Setup
* Static IP on the ESP-32 camera, and ESP-32 to be able to connect all with hotspot WiFi without reconfiguring IP.

* Use a laptop to run object detection and send data back to ESP-32.


## Communication Diagram
<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid loading="eager" path="assets/img/projects/espcam/esp-comms.png" title="Top view" class="img-fluid rounded z-depth-1" %}
  </div>
</div>

## Issues

* Servo motor jitters due when its running and receiving Wifi - might relate to a timing issue.
* Watchdog resets most likely due to timeout when ESP doesn't receive data for a set time.



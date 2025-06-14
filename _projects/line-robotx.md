---
layout: page
title: Bluetooth‑Controlled \n Line‑Follow Robot
description: Building an ESP32‑powered line‑following robot that runs FreeRTOS for real‑time motor control and streams telemetry over Bluetooth to a custom Python dashboard.
img: assets/img/robot_line_follow.jpg
importance: 2
category: fun
---

> **TL;DR** – A weekend project that evolved into a free‑roaming robot: dual motor driver + PID line sensor array, all scheduled under FreeRTOS, with a Bluetooth Low‑Energy (BLE) link so I can steer or override its behaviour from my phone.

## Why FreeRTOS?

The sensor sampling, PID loop (~1 kHz), and BLE telemetry run as separate RTOS tasks.  
Using FreeRTOS on the ESP32 avoids messy timer interrupts and keeps the control loop deterministic even while streaming data.

* **Task 1 – Line Sensor**  
  Samples an 8‑channel IR reflectance array and feeds a queue with the error signal.

* **Task 2 – PID Controller**  
  Consumes the error signal and updates the dual‑H‑bridge PWM at 5 kHz.

* **Task 3 – Telemetry / BLE**  
  Sends speed, error, and battery voltage to a Python dashboard; also accepts throttle / mode commands.

## Remote Control

I wrote a small **PyQt** desktop app that:

- Plots the live line‑error trace.  
- Lets me tweak PID gains on the fly.  
- Provides WASD or game‑pad control if the robot loses the line.

---

<div class="row">
  <div class="col-sm mt-3">
    {% include figure.liquid loading="eager" path="assets/img/robot_line_follow_top.jpg" title="Top view" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3">
    {% include figure.liquid loading="eager" path="assets/img/robot_sensor_array.jpg" title="IR sensor array PCB" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm mt-3">
    {% include figure.liquid loading="eager" path="assets/img/robot_pid_plot.jpg" title="Live PID plot" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Left: compact 3D‑printed chassis. Centre: custom IR reflectance board. Right: real‑time error signal in the dashboard.
</div>

## BOM Highlights

| Part | Purpose | Cost (CAD) |
|------|---------|-----------|
| ESP32‑WROOM‑32D | MCU + Wi‑Fi/BLE | $8 |
| L9110S dual H‑bridge | Motor driver | $2 |
| QRE1113 IR sensors ×8 | Line detection | $6 |
| 3D‑printed PLA chassis | Frame | ~$1 |

_Total cost: **under $25**._

## Key Takeaways

1. **FreeRTOS queues beat shared‑variable headaches** when juggling sensor and motor tasks.  
2. **BLE UART is plenty fast** (~115 kbps) for low‑bandwidth telemetry.  
3. Hot‑swapping PID gains from the GUI sped up tuning by an order of magnitude.

<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3">
    {% include figure.liquid path="assets/img/robot_ble_dashboard.jpg" title="Control dashboard" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  The Python dashboard: live plots, gain sliders, and manual control.
</div>

_Source on GitHub: <https://github.com/va7mii/line-following-robot>_


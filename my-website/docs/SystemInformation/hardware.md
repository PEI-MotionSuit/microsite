---
sidebar_position: 9
---

# Hardware

The MotionSuit wearable hardware consists of a network of inertial sensors distributed across the user's body, a central processing unit, and a wiring harness that ensures reliable communication. The system captures real‑time orientation data to reconstruct full‑body posture.

## Sensor Network

![image](@site/static/img/suit_photo.jpeg)

**Sensor Model**: 14 × BNO055 absolute orientation sensors (Bosch). The architecture fully supports a 15th sensor if needed.<br />

**Body Placement**:
  - **Upper body** (multiplexer address `0x70`): head, neck, left shoulder, left elbow, left wrist, right shoulder, right elbow.
  - **Lower body** (multiplexer address `0x71`): lower back, left thigh, left knee, left foot, right thigh, right knee, right foot.<br />
  
**Calibration**: Each sensor provides onboard sensor fusion (accelerometer, gyroscope, magnetometer) to compensate for drift.

## I²C Multiplexing

Because all BNO055 sensors share the same I²C address (`0x28` or `0x29`), two **TCA9548A 8‑channel multiplexers** are used:

- The primary I²C bus from the Raspberry Pi connects to both multiplexers in parallel.
- Each multiplexer switches between its eight downstream channels, allowing sequential polling of every sensor without address collisions.

## Central Processor

- **Raspberry Pi** (model unspecified, but supports I²C and GPIO).
- Runs a Python service that:
  - Polls all sensors via the multiplexers at a target interval of ~33 Hz.
  - Computes Euler angles locally (from quaternion registers) to reduce I²C traffic.
  - Implements fault tolerance: a non‑responding sensor is temporarily blacklisted.
  - Streams data to the backend over HTTPS/WebSockets via a secure Tailscale VPN.

## Wiring and Assembly

- **Power distribution**: The Raspberry Pi’s 3.3 V and GND pins feed two common power rails. All sensors and multiplexers draw power from these rails.
- **Limb‑based cabling**: Sensors on each limb (e.g., left arm: shoulder, elbow, wrist) are bundled into a single composite cable to reduce clutter.
- **Central sensors** (neck, lower back) are routed directly to the multiplexers and power rails.

## Key Performance Targets (Non‑Functional)

- **Sampling rate**: sufficient for real‑time posture alerts (implementation achieved ~3 FPS under real‑world network constraints; optimisations are ongoing).
- **Bus speed**: I²C configured for Fast Mode (400 kHz) to minimise sequential polling latency.
- **Fault tolerance**: The system continues operating if one or more sensors fail, only the affected sensor is bypassed.
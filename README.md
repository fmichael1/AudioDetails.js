# AudioDetails.js

## Overview
AudioDetails.js is a Node.js script that provides a detailed analysis of the audio stream within a video file. It outputs information such as the audio codec, bitrate, sample rate, and channels, and calculates the audio stream's size as a percentage of the overall video file size.

## Prerequisites
- [Node.js](https://nodejs.org/)
- [FFmpeg](https://ffmpeg.org/download.html): This script requires FFmpeg to be installed and added to the system's PATH.

## Installation
Clone this repository or download the `AudioDetails.js` file directly.

```bash
git clone https://github.com/yourusername/AudioDetails.js.git
cd AudioDetails.js
```

## Usage
Run the script from the command line by passing the path to the video file as an argument:

```bash
node AudioDetails.js path/to/your/video.mp4
```

## Output
The script outputs the following audio stream details of the provided video file:
* Codec
* Bitrate
* Sample Rate
* Channels
* Size of audio streams in MB
* Total size of video file in MB
* Percentage of audio stream size relative to the entire video file

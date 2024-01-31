const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');

function getAudioDetails(videoPath) {
    ffmpeg.ffprobe(videoPath, function(err, metadata) {
        if (err) {
            console.error("Error in processing video file: ", err.message);
            return;
        }

        const audioStreams = metadata.streams.filter(s => s.codec_type === 'audio');

        if (audioStreams.length === 0) {
            console.log("No audio streams found in the video file.");
            return;
        }

        audioStreams.forEach((stream, index) => {
            console.log(`Audio Stream #${index + 1}:`);
            console.log(`Codec: ${stream.codec_name}`);
            console.log(`Bitrate: ${stream.bit_rate}`);
            console.log(`Sample Rate: ${stream.sample_rate}`);
            console.log(`Channels: ${stream.channels}`);
            console.log('--------------------------');
        });

        // Calculate the size of the audio stream
        const totalSize = fs.statSync(videoPath).size;
        const audioSize = audioStreams.reduce((acc, stream) => {
            return acc + (stream.bit_rate / 8) * (metadata.format.duration);
        }, 0);
        console.log(`Size of audio streams: ${(audioSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Total size of video file: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Audio streams are ${(audioSize / totalSize * 100).toFixed(2)}% of the entire video file`);
    });
}

// Get video file path from command line arguments
const videoFile = process.argv[2];
if (!videoFile) {
    console.log("Please provide a path to the video file.");
    process.exit(1);
}

getAudioDetails(videoFile);

const fs = require('fs');
const speech = require('@google-cloud/speech');

const client = new speech.SpeechClient();

class VoiceService {
    async transcribeAudio(filePath) {
        const file = fs.readFileSync(filePath);

        const audioBytes = file.toString('base64');

        const audio = { content: audioBytes };
        const config = {
            encoding: 'LINEAR16',
            languageCode: 'pt-BR',
            model: 'default',
            audioChannelCount: 2,
            enableAutomaticPunctuation: true
        };

        const request = {
            audio: audio,
            config : config
        };

        const [response] = await client.recognize(request);

        const transcription = response.results
        .map(result => result.alternatives[0].transcript)
        .join('\n');

        return transcription;
    }
}

module.exports = new VoiceService();
import TextTask from './textTask';
import CoordsTask from './coordsTask';
import FileTask from './fileTask';
import ImageTask from './imageTask';
import VideoTask from './videoTask';
import AudioTask from './audioTask';
import AudioRecordTask from './audioRecordTask';
import VideoRecordTask from './videoRecordTask';

export const tasksTypes = {
  message: TextTask,
  coords: CoordsTask,
  image: ImageTask,
  video: VideoTask,
  audio: AudioTask,
  audio_record: AudioRecordTask,
  video_record: VideoRecordTask,
  application: FileTask,
  file: FileTask,
};

export default tasksTypes;

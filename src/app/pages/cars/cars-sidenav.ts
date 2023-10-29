export interface CarsSidenav {
  models: KeyValuePair[];
  bodyType: KeyValuePair[];
  powerTrain: KeyValuePair[];
  driveSystem: KeyValuePair[];
}

interface KeyValuePair {
  title: string;
  value: string;
}

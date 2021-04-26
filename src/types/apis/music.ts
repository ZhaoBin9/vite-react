export interface MusicSongidParams {
  aggr: number;
  cr: number;
  p: number;
  w: string;
  t: number;
  format: string;
  inCharset: string;
  outCharset: string;
  notice: number;
  n: number;
  platform: string;
  needNewCode: number;
  catZhida: number;
  remoteplace: string;
  loginUin: number;
}
export interface MusicSongidParamsFn {
  p?: number;
  w?: string;
}

export interface MusicSongVKeyParams {
  format: string;
  platform: string;
  cid: number;
  songmid: any;
  filename: string;
  guid: string;
}

export interface MusicSongVkeyParamsFn {
  songmid: any;
  filename: string;
}
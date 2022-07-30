import { Injectable } from '@angular/core';
import { Drama } from './dramas';

@Injectable({
  providedIn: 'root'
})
export class DramaService {
  private readonly DRAMAS =  [
    {
      id: 101,
      name: 'Crash Landing on You',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/64/Crash_Landing_on_You_main_poster.jpg',
      description: 'A wealthy South Korean CEO crash lands in North Korea after a paragliding mishap, and into the life of an army officer who vows to help her get back.',
      tags: ['Romantic', 'Heartfelt'],
      videoId: 'GVQGWgeVc4k',
      cast: ['Hyun Bin', 'Son Ye-jin', 'Seo Ji-hye', 'Kim Jung-hyun'],
      release: '2019',
      comments: [
        '<img src=1 onerror="alert(\'Boo!\')"/>',
        '<strong>It\'s a wonderful drama! The best!</strong>',
        '<a href="javascript:alert(\'Yikes!\')" class="underline text-sky-600">Free prizes here!</a>'
      ]
    },
    {
      id: 167,
      name: 'Hospital Playlist',
      image: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Hospital_Playlist.jpg?20210526040743',
      description: 'Five doctors who became friends in med school share friendship, laughter, and a love of music while working at the same hospital.',
      tags: ['Charming', 'Feelgood'],
      videoId: 'QdqdgF7Z5gs',
      cast:['Jo Jung-suk', 'Yoo Yeon-seok', 'Jung Kyung-ho', 'Kim Dae-myung', 'Jeon Mi-do'],
      release: '2020',
      comments: [
        '<em>Can\'t wait for Hospital Playlist 2!</em>',
        '<button onclick="alert(\'Caught you!\')">You\'ve won a chance to meet the cast! Click here to learn more!</button>'
      ]
    },
    {
      id: 204,
      name: 'Reply 1988',
      image: 'https://upload.wikimedia.org/wikipedia/en/d/d8/TVN%27s_Reply_1988_%28%EC%9D%91%EB%8B%B5%ED%95%98%EB%9D%BC_1988%29_poster.jpg',
      description: 'A nostalgic look at the camaraderie, trials, and tribulations of five families living on the same street in 1988.',
      tags: ['Charming', 'Nostalgic'],
      videoId: 'c-EMf3JdxUA',
      cast: ['Lee Hye-ri', 'Ryu Jun-yeol', 'Go Kyung-pyo', 'Park Bo-gum', 'Lee Dong-hwi'],
      release: '2015',
      comments: [
        'Reply 1988 is the best of the Reply series!',
        '<a href="javascript:alert(\'oh no!\')" class="underline">Check out these Reply 1988 references in Hospital Playlist!</a>'
      ]
    }
  ];

  constructor() { }

  public getDramas(): Drama[] {
    return this.DRAMAS;
  }

  public getDrama(id: number): Drama|undefined {
    return this.DRAMAS.find(d => d.id === id);
  }
}

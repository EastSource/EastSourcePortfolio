import pandd2025summer from './assets/Images/pandd2025summer.webp'
import MagicDragonAdventure from './assets/Images/MagicDragonAdventure.webp'
import SEARCHING from './assets/Images/SEARCHING.webp'
import HuntingAction2D from './assets/Images/HuntingAction2D.webp'
import QFrameworkTrick from './assets/Images/QFrameworkTrick.webp'
import MagicDragonAdventureMovie from './assets/Movies/MagicDragonAdventure.mp4'

function Works() {
  return (
      <div className="Works border-t-1">
        <h1>Gallery</h1>
        <div className="Gallery grid grid-cols-2 gap-4 overflow-visible">
            <WorksCard 
                image={pandd2025summer}
                title="pandd2025summer"
                href="https://pandd.sakura.ne.jp/index.html"
                tag="Game"
                chip="企画開発部というゲーム制作サークルでこちらに収録されているPuzzleKnightsというゲームを協同制作させて頂きました。プログラマーとして敵キャラクターの経路探索などを実装しました。"
            />
            <WorksCard
                image={MagicDragonAdventure}
                title="Magic Dragon Adventure"
                href="https://drive.google.com/drive/folders/1K_SyxiH1gvEE3XBdIsW9PoCj0qVlvfBi?usp=sharing"
                tag="Game"
                movie={MagicDragonAdventureMovie}
                chip="Unityで個人制作した3Dアクションゲームです。"
            />
            <WorksCard
                image={SEARCHING}
                title="SEARCHING"
                href="https://drive.google.com/drive/folders/1K_SyxiH1gvEE3XBdIsW9PoCj0qVlvfBi?usp=sharing"
                tag="Game"
                github="https://github.com/EastSource/SEARCHING"
            />
            <WorksCard
                image={HuntingAction2D}
                title="Hunting Action 2D"
                href="https://github.com/EastSource/HuntingAction2D"
                tag="Game"
                github="https://github.com/EastSource/HuntingAction2D"
            />
            <WorksCard
                image={QFrameworkTrick}
                title="QFramework Trick"
                href="https://github.com/EastSource/QFlameworkTrick"
                tag="Game"
                chip="UnityのフレームワークであるQFrameworkを用いMVCパターンを用いたゲーム作りを学習した際に作った簡単な横スクロールアクションゲームです"
                github="https://github.com/EastSource/QFlameworkTrick"
            />
            <WorksCard
                title="輪廻"
                href="https://www.nicovideo.jp/watch/sm43893012?ref=garage_share_other"
                tag="Music"
                embedSrc="https://ext.nicovideo.jp/thumb/sm43893012"
            />
            <WorksCard
                title="非現実渇望症候群"
                href="https://open.spotify.com/intl-ja/track/4ScQAjLHntfzFgmr2C3uvP?si=a4c90303fbe248ef"
                tag="Music"
                embedSrc="https://open.spotify.com/embed/track/4ScQAjLHntfzFgmr2C3uvP?utm_source=generator&si=4776a396abea485d"
            />
        </div>
      </div>
  )
}

function WorksCard(props: { image?: string; title: string; href: string; tag: string; embedSrc?: string; embedType?: 'spotify' | 'niconico', movie?: string , chip?: string; github?: string}) {
    const isEmbed = !!props.embedSrc
    const isGithub = props.github?.includes('github.com')
    return(
      <div className="relative group z-0 bg-cyan-950 backdrop-blur-xl rounded-3xl border-slate-200/80 p-4 shadow-2xl transition-transform duration-300 hover:-translate-y-3 hover:shadow-[0_35px_90px_-40px_rgba(15,23,42,0.45)] hover:z-50 flex-4 max-w-[100%] h-[50vh] overflow-visible">
        <a href={props.href} target="_blank" rel="noopener noreferrer">
            {isEmbed ?(
                <iframe
                    src={props.embedSrc}
                    className ="w-full h-[80%] object-cover rounded"
                />    
            ) : (
            <img
                src={props.image}
                alt={props.title}
                className="w-full h-[80%] object-cover rounded"
          />
          )}
        </a>
        <div className="text-xl font-[Itim] font-bold text-gray-300 m-5">{props.title}</div>
        <div className="text-sm font-[Itim] font-bold text-gray-300 m-5">{props.tag}</div>
        {isGithub && (
            <a href={props.github} className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white shadow-lg transition hover:bg-slate-700">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.043.138 3.003.404 2.29-1.554 3.296-1.23 3.296-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.624-5.475 5.92.43.37.823 1.103.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .32.216.694.825.576C20.565 21.797 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
            </a>
        )}
        {props.movie?.trim() && (
          <div className="absolute left-[50%] -translate-x-1/2 -top-50 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto text-white bg-black/60 px-8 py-6 rounded">
            <video
              src={props.movie}
              controls
              className="w-[28rem] max-w-[90vw] rounded-xl bg-black"
            >
              読み込みに失敗しました
            </video>
          </div>
        )}
        {props.chip?.trim() && (
          <div className="absolute left-[50%] -translate-x-1/2 bottom-0 translate-y-full z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto text-white bg-black/60 px-6 py-3 rounded w-[28rem] max-w-[90vw] text-left shadow-xl">
            <p className="text-sm leading-6">{props.chip}</p>
          </div>
        )}
      </div>
    )
}

export default Works
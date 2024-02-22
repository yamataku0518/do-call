import ScreenSelectToogle from "../common/ScreenSelectToogle"
import Switch from "../common/Switch"

const ScreenMenu = () => {
  return (
    <div className="app-container flex-col p-2 gap-2">
      <div className="menu-title">設 定</div>
      <div className="app-container scroll flex-col gap-2">
        <div className="rounded-md ">
          <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">情報一覧</div>
          <div className="bg-[rgb(46,46,46)] rounded-b-md ">
            <div className="py-2 px-4 border-b-black border-b flex gap-2 justify-between w-full items-center">
              <select className="p-1 px-4 w-full rounded-md">
                <option>設定ファイル</option>
                <option>サンプルアイテム</option>
              </select>
            </div>
          </div>
        </div>
        {/* Section start */}
        <div className="flex gap-2 w-full">
          <div className="rounded-md w-full">
            <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">緊急停止時のポップアップ通知</div>
            <div className="bg-[rgb(46,46,46)] rounded-b-md ">
              <div className="py-2 px-4 border-b-black border-b flex gap-2 justify-between w-full">
                <Switch />
              </div>
            </div>
          </div>
          <div className="rounded-md w-full">
            <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">表示画面設定変更モード</div>
            <div className="bg-[rgb(46,46,46)] rounded-b-md ">
              <div className="py-2 px-4 flex gap-2 justify-between w-full items-center">
                <Switch />
              </div>
            </div>
          </div>
        </div>
        {/* Section start */}
        <div className="rounded-md ">
          <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">表示画面設定</div>
          <div className="bg-[rgb(46,46,46)] rounded-b-md ">
            <div className="py-2 px-4 flex gap-8 justify-between w-full items-center">
              <div className="flex items-center gap-4">
                <input id="check_2" type="checkbox" className="w-[18px] h-[18px] accent-[#01CBA4]" />
                <label htmlFor="check_2" className="text-white text-nowrap" >新規作成</label>
              </div>
              <div className="w-full">
                <input className="py-1 px-4 rounded-md w-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Section start */}
        <div className="rounded-md ">
          <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">表示画面構成</div>
          <div className="bg-[rgb(46,46,46)] rounded-b-md">
            <div className="py-2 px-4 grid grid-cols-4 grid-rows-4  gap-3 justify-between w-full">
              {
                Array.from({ length: 16 }).map((_, i) => (
                  <ScreenSelectToogle key={i}>
                    {i + 1}
                  </ScreenSelectToogle>
                ))
              }
            </div>
          </div>
        </div>

        {/* Section start */}
        <div className="rounded-md ">
          <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">表示画面サイズ（横×縦）</div>
          <div className="bg-[rgb(46,46,46)] rounded-b-md py-2 px-4 ">
            <div className="flex gap-3 items-center">
              <select className="w-16 py-1 px-2 rounded-md ">
                {
                  Array.from({ length: 5 }).map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))
                }
              </select>
              <div className="text-white text-2xl">
                ×
              </div>
              <select className="w-16 py-1 px-2 rounded-md ">
                {
                  Array.from({ length: 5 }).map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </div>

        {/* Section start */}
        <div className="rounded-md ">
          <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">監視対象グループ / 監視対象</div>
          <div className="bg-[rgb(46,46,46)] rounded-b-md py-2 px-4 flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <select className="w-full py-1 px-2 rounded-md ">
                <option>グループ1</option>
                <option>サンプルアイテム</option>
              </select>
              <select className="w-full py-1 px-2 rounded-md ">
                <option>車両1</option>
                <option>サンプルアイテム</option>
              </select>
            </div>
            <div className="flex gap-2">
              <div className="w-full" />
              <div className="flex w-full items-center gap-4">
                <input id="check_3" type="checkbox" className="w-[18px] h-[18px] accent-[#01CBA4]" />
                <label htmlFor="check_3" className="text-white text-nowrap" >映像表示ボタンと関連付ける</label>
              </div>
            </div>
          </div>
        </div>

        {/* Section start */}
        <div className="rounded-md ">
          <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">カメラ</div>
          <div className="bg-[rgb(46,46,46)] rounded-b-md py-2 px-4 ">
            <select className="w-full py-1 px-2 rounded-md ">
              <option>車内カメラ</option>
              <option>サンプルアイテム</option>
            </select>
          </div>
        </div>

        {/* Section start */}
        <div className="rounded-md ">
          <div className="bg-[#434343] rounded-t-md text-white py-1 px-2 text-left">目標FPS</div>
          <div className="bg-[rgb(46,46,46)] rounded-b-md py-2 px-4 ">
            <select className="w-full py-1 px-2 rounded-md ">
              <option>自動</option>
              <option>サンプルアイテム</option>
            </select>
          </div>
        </div>

        {/* Bottom Button start */}
        <div className="flex gap-4 justify-center">
          <button className="py-3 px-12 rounded-full font-extrabold bg-[#01CBA4] hover:opacity-75 text-white">表 示</button>
          <button className="py-3 px-12 rounded-full font-extrabold bg-[#01CBA4] hover:opacity-75 text-white">保 存</button>
        </div>
      </div>
    </div >
  )
}

export default ScreenMenu
import React from "react"

const Cards = ({ data }) => {
  return (
    <div className="flex flex-col gap-10  justify-center lg:flex-row flex-wrap">
      {data.map((item, key) => {
        const clipPath =
          key === 1
            ? "inset(0 0 0 0 round 5% 5% 5% 40%)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 100%)"

        const clipPath2 =
          key === 1
            ? "inset(0 0 0 0 round 5% 5% 5% 40%)"
            : "polygon(0 0, 100% 0, 100% 100%, 0 100%)"

        return (
          <div
            key={key}
            className="flex rounded-2xl border-white flex-col p-4 justify-between gap-8 w-full bg-white/20 backdrop-blur-xl border shadow-[inset_0_0_10px_#FFF] max-w-100 min-w-87.5"
            style={{ clipPath }}
          >
            <div className="flex justify-between border-b-2 border-[#909090] p-3">
              <div className="flex flex-col gap-1">
                <h4 className="text-2xl font-semibold">{item.data1}</h4>
                <h4 className="text-2xl font-semibold">{item.data2}</h4>
              </div>

              {item.arrow && (
                <div className="h-20 w-20 rounded-full bg-white text-black flex justify-center items-center">
                  <i className="ri-arrow-right-up-line text-4xl font-bold"></i>
                </div>
              )}
            </div>

            <p className="text-lg">
              Bring your ideas to life through dynamic visuals and engaging
              animations.
            </p>

            {/* Video clip-path wrapper */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ clipPath: clipPath2 }}
            >
              <video
                src={item.video}
                muted
                loop
                autoPlay
                className="w-full object-cover"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Cards

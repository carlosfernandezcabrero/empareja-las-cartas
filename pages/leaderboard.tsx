import { LayoutWithHeader } from '@components/layouts/layout-with-header'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Leaderboard() {
  const [scores, setScores] = useState([])

  useEffect(() => {
    fetch('/api/get-scores')
      .then((res) => res)
      .then((data) => data.json())
      .then((_scores) => {
        setScores(_scores)
      })
  }, [])

  return (
    <LayoutWithHeader headerText="Clasificación">
      <section className="mt-6 w-full md:w-11/12 lg:w-7/12  xl:w-5/12 mx-auto text-gray-900 bg-sky-50 border-2 border-black rounded-md p-4">
        <h3 className="text-2xl mb-2">
          ¿Como funciona el sistema de puntuación?
        </h3>
        <p>
          Para calcular la puntuación se tiene en cuenta el tiempo que tardas en
          resolver el juego y el número de intentos que necesitas para resolver
          el juego.
        </p>
      </section>

      <section className="mt-10 relative overflow-x-auto shadow-md rounded-lg border border-gray-300 w-full md:w-11/12 lg:w-7/12  xl:w-5/12 mx-auto">
        <table className="w-full text-base text-left font-semibold">
          <thead className="text-base text-gray-800 bg-[#F2F5F9]">
            <tr>
              <th scope="col" className="px-6 py-3 font-semibold text-center">
                Pos
              </th>
              <th scope="col" className="px-6 py-3 font-semibold text-left">
                Usuario
              </th>
              <th scope="col" className="px-6 py-3 font-semibold text-center">
                Puntos
              </th>
            </tr>
          </thead>
          <tbody className="font-normal">
            {Object.entries(scores).map(([username, userInfo], index) => {
              const { avatar, score } = userInfo

              return (
                <tr
                  key={username}
                  className="odd:bg-white even:bg-gray-50 border-b"
                >
                  <td className="px-6 py-4 text-center font-bold text-xl text-purple-500">
                    {index + 1}
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-bold text-slate-600 whitespace-nowrap text-left flex items-center gap-x-4"
                  >
                    <Image
                      src={avatar}
                      alt="user avatar"
                      width="64"
                      height="64"
                      className="w-12 h-12 rounded-full"
                      priority={index < 5}
                    />
                    {username}
                  </th>
                  <td className="px-6 py-4 text-center text-[#112d4e] font-medium">
                    {score}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </section>
    </LayoutWithHeader>
  )
}

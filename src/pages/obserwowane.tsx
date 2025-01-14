import Footer from "@/components/Footer"
import { PostCard } from "@/components/PostList"
import { BrowserContent } from "@/components/ui/layout/LayoutContent"
import Loader from "@/components/ui/Loader"
import MobileBottomNavigation from "@/components/ui/mobile/MobileBottomNavigation"
import MobileHeader from "@/components/ui/mobile/MobileHeader"
import TabNavigation from "@/components/ui/TabNavigation"
import { trpc } from "@/utils/trpc"
import { NextPage } from "next"
import Head from "next/head"

const LikedPostItem = ({ post, refetch }: { post: any; refetch: any }) => {
  return (
    <PostCard
      key={post.id}
      post={post}
      onLike={(isLiked) => {
        if (!isLiked) refetch()
      }}
    />
  )
}

const LikedPostsList = () => {
  const { data, isLoading, isRefetching, refetch } = trpc.useQuery(
    ["likedPosts:getAll"],
    {
      refetchOnWindowFocus: false,
    }
  )

  if (isLoading || isRefetching) {
    return (
      <div className="container mx-auto flex items-center justify-center">
        <Loader />
      </div>
    )
  }

  return (
    <div className="container mx-auto mt-8 flex flex-col gap-4">
      {!data || data.length === 0 ? (
        <div className="flex flex-col items-center gap-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="180"
            viewBox="0 0 180 180"
          >
            <g fill="none" fillRule="evenodd">
              <path
                fill="#002F34"
                d="M106.527 120.752l-17.874-8.265 2.685-5.807 17.874 8.264zM43.558 82.6C28.18 75.49 9.95 82.192 2.84 97.57c-7.11 15.378-.407 33.608 14.97 40.72 15.379 7.11 33.61.407 40.72-14.971 7.11-15.378.407-33.608-14.97-40.719m-7.95 17.19c5.875 2.717 8.445 9.706 5.728 15.581-2.716 5.875-9.705 8.444-15.58 5.727-5.875-2.716-8.444-9.705-5.728-15.58 2.716-5.874 9.705-8.444 15.58-5.728"
              />
              <path
                fill="#002F34"
                d="M126.855 121.114c-15.378-7.11-33.609-.408-40.719 14.97-7.11 15.378-.408 33.608 14.97 40.719 15.378 7.11 33.608.408 40.718-14.97 7.11-15.378.408-33.608-14.97-40.719m-7.948 17.19c5.875 2.716 8.445 9.706 5.728 15.58-2.716 5.876-9.705 8.445-15.58 5.729-5.874-2.716-8.444-9.706-5.728-15.58 2.717-5.876 9.706-8.445 15.58-5.729"
              />
              <path
                fill="#2A65EA"
                d="M79.836 128.838l29.942 13.845-2.981-32.853-26.961 19.008zM68.778 73.505l1.197 9.06 37.788 17.473.013-.01 5.853 2.707 4.146 45.696-5.27 3.716-36.383-16.822-6.574.868-5.882-44.526-30.752 21.632-4.284-6.09 33.936-23.871-1.17-8.858 7.382-.975zm2.351 17.798l4.176 31.619 25.43-17.93-29.606-13.69z"
              />
              <path
                fill="#23E5DB"
                d="M64.972 129.388l16.65 7.699-3.572 7.724-16.65-7.698 3.572-7.725z"
              />
              <path
                fill="#002F34"
                d="M58.638 71.925a6.283 6.283 0 1112.372-2.197 6.283 6.283 0 01-12.372 2.197m63.301 32.455l-20.8-9.617 3.126-6.758 20.8 9.617z"
              />
              <path
                fill="#FF4134"
                d="M57.509 137.551a21.356 21.356 0 00-3.712-.33c-11.73 0-21.237 9.508-21.237 21.236 0 11.73 9.508 21.237 21.237 21.237 1.267 0 2.506-.117 3.712-.33-5.157-5.454-8.326-12.808-8.326-20.907 0-8.098 3.169-15.452 8.326-20.906"
              />
              <path
                fill="#FFD6C9"
                d="M75.033 158.457c0-10.461-7.567-19.148-17.525-20.906-5.156 5.454-8.325 12.808-8.325 20.906 0 8.099 3.169 15.453 8.325 20.906 9.958-1.756 17.525-10.444 17.525-20.906"
              />
              <path
                fill="#23E5DB"
                d="M154.789 25.887l-47.727 19.068-4.819 11.23 38.42 60.66 12.515-5 14.281-5.706 12.515-5-13.954-70.433z"
              />
              <path
                fill="#CBF7EE"
                d="M102.243 56.186l38.42 60.66-.842-84.979-32.76 13.088z"
              />
              <path
                fill="#002F34"
                d="M54.276 14.682l38.91-12.945 12.944 38.91z"
              />
              <path
                fill="#002F34"
                d="M92.608 0l2.316 1.16 12.944 38.91-2.558 2.215L53.455 16.32l.243-3.375L92.608 0z"
              />
              <path
                fill="#F8DD3E"
                d="M89.682 73.496L37.827 47.53l15.72-31.392 51.855 25.965z"
              />
              <path
                fill="#002F34"
                d="M68.418 40.781a6.18 6.18 0 11-11.053-5.535 6.182 6.182 0 0111.053 5.535m18.468 9.249a6.182 6.182 0 01-11.054-5.536 6.183 6.183 0 0111.054 5.535"
              />
              <path
                fill="#002F34"
                d="M59.584 58.424L48.53 52.89l8.835-17.643 11.053 5.535z"
              />
            </g>
          </svg>
          <div>
            <h2 className="text-3xl font-bold">Brak ogłoszeń</h2>
            <p className="text-md">
              Nie obserwujesz żadnych ogłoszeń! Aby dodać ogłoszenie do
              ulubionych kliknij na ikonę serca przeglądając jakieś ogłoszenie!
            </p>
          </div>
        </div>
      ) : (
        data?.map((likedPost) => (
          <LikedPostItem
            key={likedPost.post.id}
            post={likedPost.post}
            refetch={refetch}
          />
        ))
      )}
    </div>
  )
}

const LikedContentPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ogłoszenia - Sprzedam, kupię na OLX.pl</title>
        <meta
          name="description"
          content="Ogłoszenia - Sprzedam, kupię na OLX.pl"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MobileHeader title="Obserwowane ogłoszenia" />

        <BrowserContent>
          <div className="bg-white pt-8">
            <div className="container mx-auto">
              <h1 className="text-3xl font-bold">
                Twoje obserwowane ogłoszenia
              </h1>

              <TabNavigation
                items={[
                  {
                    name: "Obserwowane ogłoszenia",
                    href: "/obserwowane",
                  },
                ]}
              />
            </div>
          </div>
        </BrowserContent>

        <LikedPostsList />
      </main>

      <Footer />

      <MobileBottomNavigation />
    </>
  )
}

export default LikedContentPage

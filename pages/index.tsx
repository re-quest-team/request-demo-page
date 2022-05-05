import { Button } from '@/components/Elements/Button'
import { Spacer } from '@/components/Elements/Spacer'
import type { NextPage } from 'next'
import { ArrowRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import {
  AcademicCapIcon,
  AdjustmentsIcon,
  CollectionIcon,
  DeviceMobileIcon,
  PuzzleIcon,
  SearchIcon,
} from '@heroicons/react/outline'
import FeatureCard from '@/components/Card'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const i18n = {
  de: {
    title: 'Digitale Abenteuer für Bildungs&shy;einrich&shy;tungen',
    subtitle:
      'ist eine Plattform zum Erstellen von digitalen Escape Games für Bildungseinrichtungen',
    create: 're:quest erstellen',
    notWorking: 'Das funktioniert leider noch nicht',
    features: {
      adventures: {
        title: 'Spannende Abenteuer',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      digitalEducation: {
        title: 'Digitale Bildung',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      modular: {
        title: 'Modulare Rätsel',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      configure: {
        title: 'Frei Konfigurierbar',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      noInstall: {
        title: 'Keine Installation',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      pyhsicalInteraction: {
        title: 'Physische Elemente',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
    },
  },
  en: {
    title: 'Digital Escape Games for Educational Institutions',
    subtitle:
      'is a platform for creating digital Escape Games for educational institutions',
    create: 'Create re:quest',
    notWorking: 'Unfortunately this does not work yet',
    features: {
      adventures: {
        title: 'Exciting adventures',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      digitalEducation: {
        title: 'Digital education',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      modular: {
        title: 'Modular quests',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      configure: {
        title: 'Freely configurable',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      noInstall: {
        title: 'No installation',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
      pyhsicalInteraction: {
        title: 'Integrate real world elements',
        description:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
      },
    },
  },
}

const Home: NextPage = () => {
  const router = useRouter()
  const [lang, setLang] = useState<'de' | 'en'>('de')

  useEffect(() => {
    if (router.locale === 'de') setLang('de')
    if (router.locale === 'en') setLang('en')
  }, [router.locale])

  return (
    <div>
      <div className="mx-auto md:max-w-3xl">
        <h1
          className="bg-gradient-to-br from-flamingo-600 via-dodger-blue-500 to-emerald-600 bg-clip-text p-2 text-center text-6xl font-bold text-transparent"
          dangerouslySetInnerHTML={{ __html: i18n[lang].title }}
        ></h1>
        <Spacer />
        <h2 className="p-2 text-center text-2xl">
          <span className="font-bold">re:quest</span> {i18n[lang].subtitle}
        </h2>
        <Spacer />
        <Button
          endIcon={<ArrowRightIcon className="h-4" />}
          className="umami--click--create-request-button mx-auto"
          onClick={() => toast(i18n[lang].notWorking)}
        >
          {i18n[lang].create}
        </Button>
        <Spacer />
      </div>
      <div className="flex flex-wrap">
        <FeatureCard
          title={i18n[lang].features.adventures.title}
          color="bg-red-400"
          icon={SearchIcon}
          umamiTag="adventures-feature"
        >
          <>{i18n[lang].features.adventures.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.digitalEducation.title}
          color="bg-blue-400"
          icon={AcademicCapIcon}
          umamiTag="digitalEducation-feature"
        >
          <>{i18n[lang].features.digitalEducation.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.modular.title}
          color="bg-purple-400"
          icon={CollectionIcon}
          umamiTag="modular-feature"
        >
          <>{i18n[lang].features.modular.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.configure.title}
          color="bg-pink-400"
          icon={AdjustmentsIcon}
          umamiTag="configure-feature"
        >
          <>{i18n[lang].features.configure.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.noInstall.title}
          color="bg-orange-400"
          icon={DeviceMobileIcon}
          umamiTag="noInstall-feature"
        >
          <>{i18n[lang].features.noInstall.description}</>
        </FeatureCard>
        <FeatureCard
          title={i18n[lang].features.pyhsicalInteraction.title}
          color="bg-green-400"
          icon={PuzzleIcon}
          umamiTag="pyhsicalInteraction-feature"
        >
          <>{i18n[lang].features.pyhsicalInteraction.description}</>
        </FeatureCard>
      </div>
      <Spacer />
      <Link href={'/faq'} passHref>
        <Button
          endIcon={<ArrowRightIcon className="h-4" />}
          className="mx-auto"
        >
          Weitere Informationen
        </Button>
      </Link>
    </div>
  )
}

export default Home

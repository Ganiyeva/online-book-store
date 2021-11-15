import React from 'react'
import { useParams } from 'react-router-dom'
import { BookGrid } from '../components/BookGrid.js/BookGrid'
import { Categories } from '../components/Categories.js/Categories'

export const Library = () => {
    const { genreid } = useParams()
    return (
        <div className="container">
            <div className="row">
                <BookGrid genre={genreid} />
                <div className="categories">
                    <Categories title="ARCHITECTURE" id='Architecture' />
                    <Categories title='ANTIQUES & COLLECTIBLES' id='AntiquesandCollectib' />
                    <Categories title='ART' id='Art' />
                    <Categories title='BIBLES' id='Bibles' />
                    <Categories title='BIOGRAPHY & AUTOBIOGRAPHY' id='BiographyAutobiograp' />
                    <Categories title='BODY, MIND & SPIRIT' id='BodyMindSpirit' />
                    <Categories title='BUSINESS & ECONOMICS' id='BusinessEconomics' />
                    <Categories title='COMICS & GRAPHIC NOVELS' id='ComicsGraphicNovels' />
                    <Categories title='COMPUTERS' id='Computers' />
                    <Categories title='COOKING' id='Cooking' />
                    <Categories title='CRAFTS & HOBBIES' id='CraftsHobbies' />
                    <Categories title='DESIGN' id='Design' />
                    <Categories title='DRAMA' id='Drama' />
                    <Categories title='EDUCATION' id='BISACEducation' />
                    <Categories title='FAMILY & RELATIONSHIPS' id='FamilyRelationships' />
                    <Categories title='FICTION' id='Fiction' />
                    <Categories title='FOREIGN LANGUAGE STUDY' id='ForeignLanguageStudy' />
                    <Categories title='GAMES & ACTIVITIES' id='Games' />
                    <Categories title='GARDENING ' id='Gardening' />
                    <Categories title='HEALTH & FITNESS' id='HealthandFitness' />
                    <Categories title='HISTORY' id='History' />
                    <Categories title='HOUSE & HOME' id='HouseHome' />
                    <Categories title='HUMOR' id='Humor' />
                    <Categories title='JUVENILE FICTION' id='JuvenileFiction' />
                    <Categories title='JUVENILE NONFICTION' id='JuvenileNonfiction' />
                    <Categories title='LANGUAGE ARTS & DISCIPLINES' id='LanguageArtsDiscipli' />
                    <Categories title='LAW' id='Law' />
                    <Categories title='LITERARY COLLECTIONS' id='LiteraryCollections' />
                    <Categories title='LITERARY CRITICISM' id='LiteraryCriticism' />
                    <Categories title='MATHEMATICS' id='Mathematics' />
                    <Categories title='MEDICAL' id='Medical' />
                    <Categories title='MUSIC' id='music' />
                    <Categories title='NATURE' id='nature' />
                    <Categories title='PERFORMING ARTS' id='PerformingArts' />
                    <Categories title='PETS' id='pets' />
                    <Categories title='PHILOSOPHY' id='Philosophy' />
                    <Categories title='PHOTOGRAPHY' id='Photography' />
                    <Categories title='POETRY' id='Poetry' />
                    <Categories title='POLITICAL SCIENCE' id='PoliticalScience' />
                    <Categories title='PSYCHOLOGY' id='Psychology' />
                    <Categories title='REFERENCE' id='Reference' />
                    <Categories title='RELIGION' id='Religion' />
                    <Categories title='SCIENCE' id='Science' />
                    <Categories title='SELF-HELP' id='SelfHelp' />
                    <Categories title='SOCIAL SCIENCE' id='SocialScience' />
                    <Categories title='SPORTS & RECREATION' id='SportsRecreation' />
                    <Categories title='STUDY AIDS' id='StudyAids' />
                    <Categories title='TECHNOLOGY & ENGINEERING' id='TechnologyEngineerin' />
                    <Categories title='TRANSPORTATION' id='Transportation' />
                    <Categories title='TRAVEL' id='Travel' />
                    <Categories title='TRUE CRIME' id='TrueCrime' />
                    <Categories title='YOUNG ADULT FICTION' id='YAFiction' />
                    <Categories title='YOUNG ADULT NONFICTION' id='YANonFiction' />
                </div>
            </div>
        </div>
    )
}

import ProductBadge from './productBadge';
import ProductRating from './productRating'
import ProductGallery from './productGallery'
import ProductSizes from './productSizes'
import { Tab, TabContainer, TabList, Tabs } from '../utils/Tab/Tabs';
import { createSignal } from 'solid-js';

interface Props {
  title: string;
  full_description: string;
  data: object;
}

export default function ProductOverview({
  title,
  full_description,
  data,
}: Props) {

  const [events, setEvents] = createSignal('');

  return (
    <div class="grid grid-flow-row mt-5 w-4/5 mx-auto border rounded-lg shadow-lg p-1">
      {(title.length != 0) &&
        <h2 class="mb-3 text-4xl"><b>{title}</b></h2>
      }
      {(full_description.length != 0) &&
        <p class="mb-5 lg:w-8/12 text-fade dark:text-faded">{full_description}</p>
      }

      <Tabs setIndex={i => setEvents(e => `setIndex(${i})\n${e}`)}>
        <TabList>
          <Tab>Design</Tab>
          <Tab>Material</Tab>
          <Tab>Considerations</Tab>
          <Tab>Included</Tab>
        </TabList>
        <TabContainer>
          <div
            id="first-tab"
            role="tabpanel"
            aria-labelledby="#design"
          >
            <div class="grid grid-flow-row md:grid-flow-col mt-5">
              <div class="lg:mb-0 mb-4 lg:p-10">
                <h5 class="mt-5 mb-4 font-bold">Adaptive and modular</h5>
                <p class='dark:text-faded'>If everything I did failed - which it doesn't, it actually succeeds - just the fact that I'm willing to fail is an inspiration. People are so scared to lose that they don't even try.
                  <br /><br />
                  Like, one thing people can't say is that I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
                </p>
              </div>

              <div class="lg:mb-0 mb-4">
                <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1549400854-b4300f444934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
              </div>
            </div>
          </div>
        </TabContainer>
        <TabContainer>
          <div
            class="tab-pane"
            id="second-tab"
            role="tabpanel"
            aria-labelledby="#material"
          >
            <div class="grid grid-flow-row md:grid-flow-col mt-5">
              <div class="lg:mb-0 mb-4 lg:p-10">
                <h5 class="mt-5 mb-4 font-bold">Material Design</h5>
                <p class='dark:text-faded'>The time is now for it to be okay to be great. People in this world shun people for being great. For being a bright color. For standing out. But the time is now to be okay to be the greatest you.
                  <br />
                  Would you believe in what you believe in, if you were the only one who believed it? People are so scared to lose that they don't even try.
                </p>
              </div>

              <div class="lg:mb-0 mb-4">
                <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
              </div>
            </div>
          </div>
        </TabContainer>
        <TabContainer>
          <div
            class="tab-pane"
            id="third-tab"
            role="tabpanel"
            aria-labelledby="#considerations"
          >
            <div class="grid grid-flow-row md:grid-flow-col mt-5">
              <div class="lg:mb-0 mb-4 lg:p-10">
                <h5 class="mt-5 mb-4 font-bold">Considerations</h5>
                <p class='dark:text-faded'>I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves.
                  <br /><br />
                  If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.
                </p>
              </div>

              <div class="lg:mb-0 mb-4">
                <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
              </div>
            </div>
          </div>
        </TabContainer>
        <TabContainer>
          <div
            class="tab-pane"
            id="fourth-tab"
            role="tabpanel"
            aria-labelledby="#included"
          >
            <div class="grid grid-flow-row md:grid-flow-col mt-5">
              <div class="lg:mb-0 mb-4 lg:p-10">
                <h5 class="mt-5 mb-4 font-bold">Included</h5>
                <p class='dark:text-faded'>We’re not always in the position that we want to be at. We’re constantly growing. We’re constantly making mistakes. We’re constantly trying to express ourselves and actualize our dreams.
                  <br />
                  If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.
                </p>
              </div>

              <div class="lg:mb-0 mb-4">
                <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1611849362103-5c99622adf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="" />
              </div>
            </div>
          </div>
        </TabContainer>
      </Tabs>
    </div>
  );
};




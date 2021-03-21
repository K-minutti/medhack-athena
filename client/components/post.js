import React from "react";
import { Container, Feed, Icon, Segment, Divider } from "semantic-ui-react";

const Post = () => (
  <Container>
    <Segment>
      <h3>Inflammation after eating meat</h3>
      <p>
        Hi, I have a why does it seem that every time I eat meat I feel awful.
        Recently I have been ...
      </p>
    </Segment>
    <Divider hidden />

    <Feed>
      <Feed.Event>
        <Feed.Label>
          <Icon name="user md" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <a>Justen Kitsune</a>
            <Feed.Date>4 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="up" />
              41 Upvotes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
      <Feed.Event>
        <Feed.Label>
          <Icon name="user md" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>Elliot Fu</Feed.User>
            <Feed.Date>1 Hour Ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            It can also be successfully used as a daily exercise to get writers
            to begin writing. Being shown a random sentence and using it to
            complete a paragraph each day can be an excellent way to begin any
            writing session.
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="up" />4 Upvotes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label>
          <Icon name="user" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <a>Helen Troy</a>
            <Feed.Date>4 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra images></Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="up" />1 Upvotes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label>
          <Icon name="user" />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary date="2 Days Ago" user="Jenny Hess" />
          <Feed.Meta>
            <Feed.Like>
              <Icon name="up" />8 Upvotes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label>
          <Icon name="user " />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <a>Joe Henderson</a>
            <Feed.Date>3 days ago</Feed.Date>
          </Feed.Summary>
          <Feed.Extra text>
            Ours is a life of constant reruns. We're always circling back to
            where we'd we started, then starting all over again. Even if we
            don't run extra laps that day, we surely will come back for more of
            the same another day soon.
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name="up" />5 Upvotes
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  </Container>
);

export default Post;

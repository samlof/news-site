// @ts-nocheck
import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** ArticleType */
export type ArticleType = {
  __typename?: 'ArticleType';
  /** Article's content */
  content?: Maybe<Scalars['String']>;
  /** Article's image */
  coverImageUrl?: Maybe<Scalars['String']>;
  /** Article's description */
  description?: Maybe<Scalars['String']>;
  /** Article's subtitle */
  subtitle?: Maybe<Scalars['String']>;
  /** Article's title */
  title?: Maybe<Scalars['String']>;
  /** Article's url */
  url?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Get a single article from original url */
  article: ArticleType;
  /** Get articles from ycombinator */
  articles: Array<ArticleType>;
};


export type QueryArticleArgs = {
  url: Scalars['String'];
};


export type QueryArticlesArgs = {
  pageNumber?: InputMaybe<Scalars['Int']>;
};

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', articles: Array<{ __typename: 'ArticleType', title?: string | null | undefined, url?: string | null | undefined, content?: string | null | undefined, coverImageUrl?: string | null | undefined }> };

export type NewsCardFragment = { __typename?: 'ArticleType', title?: string | null | undefined, url?: string | null | undefined, content?: string | null | undefined, coverImageUrl?: string | null | undefined };

export const NewsCardFragment = gql`
    fragment NewsCardFragment on ArticleType {
  title
  url
  content
  coverImageUrl
}
    `;
export const HomePageQueryDocument = gql`
    query HomePageQuery {
  articles {
    ...NewsCardFragment
    __typename
  }
}
    ${NewsCardFragment}`;

  @Injectable({
    providedIn: 'root'
  })
  export class HomePageQueryGQL extends Apollo.Query<HomePageQuery, HomePageQueryVariables> {
    document = HomePageQueryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
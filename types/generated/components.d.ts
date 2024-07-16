import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionTextGrid extends Schema.Component {
  collectionName: 'components_section_text_grids';
  info: {
    displayName: 'text_grid';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface SectionSectionTwoColumns extends Schema.Component {
  collectionName: 'components_section_section_two_columns';
  info: {
    displayName: 'section_two_columns';
    icon: 'code';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    description: Attribute.String & Attribute.Required;
    image: Attribute.Media<'images' | 'videos'> & Attribute.Required;
    metadata: Attribute.Component<'section.section-metadata'> &
      Attribute.Required;
  };
}

export interface SectionSectionMetadata extends Schema.Component {
  collectionName: 'components_section_section_metadata';
  info: {
    displayName: 'section_metadata';
    icon: 'alien';
    description: '';
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 255;
      }>;
    section_id: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
        maxLength: 50;
      }>;
    background: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

export interface SectionSectionGrid extends Schema.Component {
  collectionName: 'components_section_section_grids';
  info: {
    displayName: 'section_grid';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    text_grid: Attribute.Component<'section.text-grid', true>;
    image_grid: Attribute.Component<'section.image-grid', true>;
    metadata: Attribute.Component<'section.section-metadata'>;
  };
}

export interface SectionSectionContent extends Schema.Component {
  collectionName: 'components_section_section_content_s';
  info: {
    displayName: 'section_content ';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.Blocks & Attribute.Required;
    metadata: Attribute.Component<'section.section-metadata', true> &
      Attribute.Required;
  };
}

export interface SectionImageGrid extends Schema.Component {
  collectionName: 'components_section_image_grids';
  info: {
    displayName: 'image_grid';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images', true>;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menu_s';
  info: {
    displayName: 'menu ';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    logo_link: Attribute.Text & Attribute.Required;
    logo_text: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 255;
      }>;
    logo: Attribute.Media<'images'> & Attribute.Required;
    menu_links: Attribute.Component<'menu.menu-link', true> &
      Attribute.Required;
  };
}

export interface MenuMenuLink extends Schema.Component {
  collectionName: 'components_menu_menu_links';
  info: {
    displayName: 'menu_link';
    icon: 'bulletList';
  };
  attributes: {
    link_text: Attribute.String & Attribute.Required;
    url: Attribute.Text & Attribute.Required;
    open_new_tab: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.text-grid': SectionTextGrid;
      'section.section-two-columns': SectionSectionTwoColumns;
      'section.section-metadata': SectionSectionMetadata;
      'section.section-grid': SectionSectionGrid;
      'section.section-content': SectionSectionContent;
      'section.image-grid': SectionImageGrid;
      'menu.menu': MenuMenu;
      'menu.menu-link': MenuMenuLink;
    }
  }
}

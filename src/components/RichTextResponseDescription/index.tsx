import { Text } from '@chakra-ui/react';
import { ArticleDescription } from 'generated/types';

export interface IRichTextResponseDescriptionProps {
  description: ArticleDescription;
  noOfLines?: number;
}

function extractTextFromRichText(document: ArticleDescription): string {
  let textContent = '';

  // A recursive function to traverse through the document structure
  function traverseNodes(node: any) {
    if (node.nodeType === 'text') {
      textContent += ` ${node.value}`;
    } else if (node.content && Array.isArray(node.content)) {
      node.content.forEach(traverseNodes);
    }
  }

  traverseNodes(document);
  return textContent;
}

export const RichTextResponseDescription: React.FC<IRichTextResponseDescriptionProps> = ({
  description,
  noOfLines = 5,
}) => {
  return <Text noOfLines={noOfLines}>{extractTextFromRichText(description)}</Text>;
};

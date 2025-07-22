import { $Specification, Specification } from '../specification';
import { $Version } from '../common';

describe('Specification schema validation', () => {

  const standardLetterSpecification: Specification = {
    id: 'standard-letter' as Specification['id'],
    name: 'Standard Economy-class Letter',
    status: 'PUBLISHED',
    createdAt: new Date(),
    updatedAt: new Date(),
    version: $Version.parse('1.0.0'),
  };

  it('should validate a standard letter specification', () => {
    expect(() => $Specification.parse(standardLetterSpecification)).not.toThrow();
  });

});

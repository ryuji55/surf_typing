# frozen_string_literal: true

module RuboCop
  module AST
    # A node extension for `in` nodes. This will be used in place of a plain
    # node when the builder constructs the AST, making its methods available
    # to all `in` nodes within RuboCop.
    class InPatternNode < Node
      # Returns the index of the `in` branch within the `case` statement.
      #
      # @return [Integer] the index of the `in` branch
      def branch_index
        parent.in_pattern_branches.index(self)
      end

      # Checks whether the `in` node has a `then` keyword.
      #
      # @return [Boolean] whether the `in` node has a `then` keyword
      def then?
        loc.begin&.is?('then')
      end

      # Returns the body of the `in` node.
      #
      # @return [Node, nil] the body of the `in` node
      def body
        node_parts[-1]
      end
    end
  end
end
